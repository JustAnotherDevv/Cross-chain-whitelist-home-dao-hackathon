### Cross-chain whitelist oracle

THis project was created for the Home DAO hack 2023.

![Cross-chain whitelist logo](/images/whitelist_icon.PNG)

# Overview

This project uses custom Chainlink data feeds that I created and served from my own Chainlink node.
This allows for access to whitelist for addresses on EVM chains like Eehereum, Avalanche(any other EVM chains), Solana.

### How it works

![Infrastructure graph](/images/howitworks2.svg)

Backend represents simple example of centralized whitelist with public API that could be used by the company like TruFin.

Chainlink nodes deployed to every needed chain request the data from this API and send it back to the smart contracts.

Operator smart contracts faciliates connection between protocol's smart contract and Chainlink node.

Whitelist check smart contract contains example use of checking whether or not given user is whitelisted.

### Bounties I am applying for:
- Chainlink track
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

ToDo

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

Example Solidity Operator and Whitelist checker smart contracts are available in the hardhat directory.

LINK token smart contract has to be changed according to official adresses provided by the Chainlink [here](https://docs.chain.link/resources/link-token-contracts).
API endpoint also has to be modified and changed to yours depending on which IP address and port are you using. Recommendation is to run it on the VPS.

Adresses of my contracts deployed for testing:

Ethereum Sepolia:

Avalanche Fuji:

Solana devnet:
