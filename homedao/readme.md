### Cross-chain whitelist oracle

THis project was created for the Home DAO hack 2023.

![Cross-chain whitelist logo](/images/whitelist_icon.PNG)

# Overview

This project uses custom Chainlink data feeds that I created and served from my own Chainlink node.
This allows for access to whitelist for addresses on EVM chains like Eehereum, Avalanche(any other EVM chains), Solana.

### How it works & How Chainlink was used

![Infrastructure graph](/images/howitworks2.svg)

Backend represents simple example of centralized whitelist with public API that could be used by the company like TruFin.

Whitelist check smart contract contains example use of checking whether or not given user is whitelisted thank to integration with Chainlink.

Bounty's description included focus on 4 different chains: Ethereum, Avalanche, Solana, Aptos however currently Aptos is not supported by any Chainlink service, Solana is also not supported by functions, anyAPI so the only way to integrate with it is running your own Chainlink node.

In my hackathon implementation Chainlink, my nodes deployed to every needed chain request the data from this API using my custom job to retrieve dat and send it back to the smart contracts.

![Chainlink job](/images/node2.PNG)

my node setup for the Avalanche chain:

```
[Log]
Level = 'warn'

[WebServer]
AllowOrigins = '\*'
SecureCookies = false

[WebServer.TLS]
HTTPSPort = 0

[[EVM]]
ChainID = '43113'

[[EVM.Nodes]]
Name = 'AvalancheFuji'
WSURL = '<QUICKNODE_WSS_URL_FOR_AVALANCHE_FUJI_TESTNET>'
HTTPURL = '<QUICKNODE_HTTP_URL_FOR_AVALANCHE_FUJI_TESTNET>'
```

Job spec for whitelist data feed

```
type = "directrequest"
schemaVersion = 1
name = "Get whitelist info"
forwardingAllowed = false
maxTaskDuration = "0s"
contractAddress = "0xA896aD31dfbDe17a6bc9c01F9d05F2238f3d3D48"
minContractPaymentLinkJuels = "0"
observationSource = """
    decode_log   [type="ethabidecodelog"
                  abi="OracleRequest(bytes32 indexed specId, address requester, bytes32 requestId, uint256 payment, address callbackAddr, bytes4 callbackFunctionId, uint256 cancelExpiration, uint256 dataVersion, bytes data)"
                  data="$(jobRun.logData)"
                  topics="$(jobRun.logTopics)"]

    decode_cbor  [type="cborparse" data="$(decode_log.data)"]
    fetch        [type="http" method=GET url="$(decode_cbor.get)" allowUnrestrictedNetworkAccess="true"]
    parse        [type="jsonparse" path="$(decode_cbor.path)" data="$(fetch)"]

    encode_data  [type="ethabiencode" abi="(bytes32 requestId, bool value, address user)" data="{ \\"requestId\\": $(decode_log.requestId), \\"value\\": $(parse), \\"user\\": $(decode_cbor.user) }"]
    encode_tx    [type="ethabiencode"
                  abi="fulfillOracleRequest2(bytes32 requestId, uint256 payment, address callbackAddress, bytes4 callbackFunctionId, uint256 expiration, bytes calldata data)"
                  data="{\\"requestId\\": $(decode_log.requestId), \\"payment\\":   $(decode_log.payment), \\"callbackAddress\\": $(decode_log.callbackAddr), \\"callbackFunctionId\\": $(decode_log.callbackFunctionId), \\"expiration\\": $(decode_log.cancelExpiration), \\"data\\": $(encode_data)}"
                  ]
    submit_tx    [type="ethtx" to="0xA896aD31dfbDe17a6bc9c01F9d05F2238f3d3D48" data="$(encode_tx)"]

    decode_log -> decode_cbor -> fetch -> parse -> encode_data -> encode_tx -> submit_tx
"""

```

Operator smart contracts faciliates connection between protocol's smart contract and Chainlink node.

![Chainlink node](/images/node1.PNG)


### Bounties I am applying for:
- Chainlink track - Best project using other Chainlink Services
- Main track
- Defi track from TruFin (challenge #1 with whitelist)

### Current MVP version includes:
- Simple example nodeJS backend serving centralized whitelist with option of adding new addresses for multiple chains, getting confirmation if 
given address is included in the whitelist or not.
- Chainlink node serving custom data feed from the API.
- Example Solidity smart contract accessing the whitelist check in a function.

# Setup

ToDO

## Frontend

- run `cd scaffold-eth-2`
- install dependencies with `yarn install`
- start dApp with `yarn start`

## Backend

- run `npm i` to install dependencies
- run `npm run build` to run server in production mode

Make sure that the port is open and available publicly

## Chainlink nodes

Currently the multi-chain node funcionality is in the beta so recommended way is to do a separate setup for each chain

Follow instructions from [here to setup node](https://docs.chain.link/chainlink-nodes/v1/running-a-chainlink-node#overview) and from [here to create jobs](https://docs.chain.link/chainlink-nodes/v1/fulfilling-requests). These steps have to be repeated for every chain that should be supported and configuration for each chain has to be customized with different `chainId` and RPC for http/wss connection.

## Smart contracts

Smart contracts have to be deployed separately on each chain that should be supported, then they have to be configured to allow data feed from node for selected chain.
Standard setup for this step is also included in the fullfilling requests chainlink documentation page.

Example Solidity Operator and WhitelistTester smart contracts are available in the hardhat directory.

LINK token smart contract has to be changed according to official adresses provided by the Chainlink [here](https://docs.chain.link/resources/link-token-contracts).
API endpoint also has to be modified and changed to yours depending on which IP address and port are you using. Recommendation is to run it on the VPS.

Adresses of my contracts deployed for testing:

Ethereum Sepolia:
- WhitelistTester - 0x2f3EEB03918E99cFff085CB2D2a0C3b2cb4d6587
- Operator - 0x0DB7af6b4e340e19A7069b648eB14695f5cc0976

Avalanche Fuji:
- WhitelistTester - 0xb49b2f4875e3FCf574aB17335C1CC30Fc5Dda680
- Operator - 0xA896aD31dfbDe17a6bc9c01F9d05F2238f3d3D48

Solana devnet:
- 
- 

run `yarn deploy` in `scaffold-eth-2` subdirectory to deploy Solidity smart contracts, don't forget to modify and reconfigure them in the first place for your chosen chain.

Project's dApp was bootstrapped based on [scaffold-eth2](https://github.com/scaffold-eth/scaffold-eth-2).