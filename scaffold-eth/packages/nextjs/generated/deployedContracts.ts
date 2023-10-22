const contracts = {
  43113: [
    {
      chainId: "43113",
      name: "AvalancheFuji",
      contracts: {
        whitelistTester: {
          address: "0xdf920D7Bf2A84CA160e690DdFA843ff77EEc9a71",
          abi: [
            {
              "inputs": [],
              "name": "acceptOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "_requestId",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "_payment",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes4",
                  "name": "_callbackFunctionId",
                  "type": "bytes4"
                },
                {
                  "internalType": "uint256",
                  "name": "_expiration",
                  "type": "uint256"
                }
              ],
              "name": "cancelRequest",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "id",
                  "type": "bytes32"
                }
              ],
              "name": "ChainlinkCancelled",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "id",
                  "type": "bytes32"
                }
              ],
              "name": "ChainlinkFulfilled",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "id",
                  "type": "bytes32"
                }
              ],
              "name": "ChainlinkRequested",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "_requestId",
                  "type": "bytes32"
                },
                {
                  "internalType": "bool",
                  "name": "_isInWhitelist",
                  "type": "bool"
                },
                {
                  "internalType": "address",
                  "name": "_user",
                  "type": "address"
                }
              ],
              "name": "fulfillEthereumPrice",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferRequested",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_oracle",
                  "type": "address"
                },
                {
                  "internalType": "string",
                  "name": "_jobId",
                  "type": "string"
                }
              ],
              "name": "requestWhitelistInfo",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "requestId",
                  "type": "bytes32"
                },
                {
                  "indexed": true,
                  "internalType": "bool",
                  "name": "price",
                  "type": "bool"
                }
              ],
              "name": "RequestWhitelistInfoFulfilled",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "whitelistedFunction",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "result",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "withdrawLink",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "name": "isWhitelisted",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        },
        Operator: {
          address: "0xA896aD31dfbDe17a6bc9c01F9d05F2238f3d3D48",
          abi: [
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "targets",
                  "type": "address[]"
                },
                {
                  "internalType": "address[]",
                  "name": "senders",
                  "type": "address[]"
                }
              ],
              "name": "acceptAuthorizedReceivers",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "ownable",
                  "type": "address[]"
                }
              ],
              "name": "acceptOwnableContracts",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "acceptOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "requestId",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "payment",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes4",
                  "name": "callbackFunc",
                  "type": "bytes4"
                },
                {
                  "internalType": "uint256",
                  "name": "expiration",
                  "type": "uint256"
                }
              ],
              "name": "cancelOracleRequest",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "link",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "address[]",
                  "name": "senders",
                  "type": "address[]"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "changedBy",
                  "type": "address"
                }
              ],
              "name": "AuthorizedSendersChanged",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "requestId",
                  "type": "bytes32"
                }
              ],
              "name": "CancelOracleRequest",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "payment",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes4",
                  "name": "callbackFunc",
                  "type": "bytes4"
                },
                {
                  "internalType": "uint256",
                  "name": "expiration",
                  "type": "uint256"
                }
              ],
              "name": "cancelOracleRequestByRequester",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address payable[]",
                  "name": "receivers",
                  "type": "address[]"
                },
                {
                  "internalType": "uint256[]",
                  "name": "amounts",
                  "type": "uint256[]"
                }
              ],
              "name": "distributeFunds",
              "outputs": [],
              "stateMutability": "payable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "requestId",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "payment",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "callbackAddress",
                  "type": "address"
                },
                {
                  "internalType": "bytes4",
                  "name": "callbackFunctionId",
                  "type": "bytes4"
                },
                {
                  "internalType": "uint256",
                  "name": "expiration",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32",
                  "name": "data",
                  "type": "bytes32"
                }
              ],
              "name": "fulfillOracleRequest",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "bytes32",
                  "name": "requestId",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "payment",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "callbackAddress",
                  "type": "address"
                },
                {
                  "internalType": "bytes4",
                  "name": "callbackFunctionId",
                  "type": "bytes4"
                },
                {
                  "internalType": "uint256",
                  "name": "expiration",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "fulfillOracleRequest2",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "onTokenTransfer",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "payment",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32",
                  "name": "specId",
                  "type": "bytes32"
                },
                {
                  "internalType": "bytes4",
                  "name": "callbackFunctionId",
                  "type": "bytes4"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "dataVersion",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "operatorRequest",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "payment",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes32",
                  "name": "specId",
                  "type": "bytes32"
                },
                {
                  "internalType": "address",
                  "name": "callbackAddress",
                  "type": "address"
                },
                {
                  "internalType": "bytes4",
                  "name": "callbackFunctionId",
                  "type": "bytes4"
                },
                {
                  "internalType": "uint256",
                  "name": "nonce",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "dataVersion",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "oracleRequest",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "specId",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "requester",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bytes32",
                  "name": "requestId",
                  "type": "bytes32"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "payment",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "callbackAddr",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "bytes4",
                  "name": "callbackFunctionId",
                  "type": "bytes4"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "cancelExpiration",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "dataVersion",
                  "type": "uint256"
                },
                {
                  "indexed": false,
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "OracleRequest",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "bytes32",
                  "name": "requestId",
                  "type": "bytes32"
                }
              ],
              "name": "OracleResponse",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "acceptedContract",
                  "type": "address"
                }
              ],
              "name": "OwnableContractAccepted",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "ownerForward",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferRequested",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "name": "OwnershipTransferred",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                }
              ],
              "name": "ownerTransferAndCall",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "success",
                  "type": "bool"
                }
              ],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "senders",
                  "type": "address[]"
                }
              ],
              "name": "setAuthorizedSenders",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "targets",
                  "type": "address[]"
                },
                {
                  "internalType": "address[]",
                  "name": "senders",
                  "type": "address[]"
                }
              ],
              "name": "setAuthorizedSendersOn",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "address[]",
                  "name": "targets",
                  "type": "address[]"
                },
                {
                  "indexed": false,
                  "internalType": "address[]",
                  "name": "senders",
                  "type": "address[]"
                },
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "changedBy",
                  "type": "address"
                }
              ],
              "name": "TargetsUpdatedAuthorizedSenders",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "address[]",
                  "name": "ownable",
                  "type": "address[]"
                },
                {
                  "internalType": "address",
                  "name": "newOwner",
                  "type": "address"
                }
              ],
              "name": "transferOwnableContracts",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                }
              ],
              "name": "transferOwnership",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getAuthorizedSenders",
              "outputs": [
                {
                  "internalType": "address[]",
                  "name": "",
                  "type": "address[]"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getChainlinkToken",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "getExpiryTime",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                }
              ],
              "name": "isAuthorizedSender",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "owner",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "typeAndVersion",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "stateMutability": "pure",
              "type": "function"
            },
            {
              "inputs": [],
              "name": "withdrawable",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "stateMutability": "view",
              "type": "function"
            }
          ]
        }
      },
    },
  ],
} as const;

export default contracts;
