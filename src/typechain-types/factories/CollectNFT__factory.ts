/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CollectNFT, CollectNFTInterface } from "../CollectNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "hub",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Initialized",
    type: "error",
  },
  {
    inputs: [],
    name: "NotHub",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOwnerOrApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "HUB",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "burnWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDomainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSourcePublicationPointer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mintTimestampOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "permitForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "sigNonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenDataOf",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "mintTimestamp",
            type: "uint96",
          },
        ],
        internalType: "struct IERC721Time.TokenData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516200255a3803806200255a83398101604081905261003191610042565b6001600160a01b0316608052610072565b60006020828403121561005457600080fd5b81516001600160a01b038116811461006b57600080fd5b9392505050565b6080516124b7620000a36000396000818161037701528181610a2d01528181610f0b015261188401526124b76000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c80636a627842116100f9578063b88d4fde11610097578063dd69cdb111610071578063dd69cdb1146103ff578063e985e9c514610412578063ed24911d1461044e578063f990ccd71461045657600080fd5b8063b88d4fde14610399578063c0da9bcd146103ac578063c87b56dd146103ec57600080fd5b806389028a13116100d357806389028a131461034457806395d89b4114610357578063a22cb4651461035f578063a4c52b861461037257600080fd5b80636a6278421461030b57806370a082311461031e5780637ef67f991461033157600080fd5b80633a755ed11161016657806342966c681161014057806342966c68146102bf5780634f6ccce7146102d257806350ddf35c146102e55780636352211e146102f857600080fd5b80633a755ed11461027e5780633fa78c0a1461029957806342842e0e146102ac57600080fd5b8063095ea7b3116101a2578063095ea7b31461023157806318160ddd1461024657806323b872dd146102585780632f745c591461026b57600080fd5b806301ffc9a7146101c957806306fdde03146101f1578063081812fc14610206575b600080fd5b6101dc6101d7366004611cf3565b610476565b60405190151581526020015b60405180910390f35b6101f96104a1565b6040516101e89190611d6f565b610219610214366004611d82565b610533565b6040516001600160a01b0390911681526020016101e8565b61024461023f366004611db7565b6105cd565b005b6008545b6040519081526020016101e8565b610244610266366004611de1565b6106e3565b61024a610279366004611db7565b610714565b600b54600c54604080519283526020830191909152016101e8565b6102446102a7366004611e66565b6107aa565b6102446102ba366004611de1565b610834565b6102446102cd366004611d82565b61084f565b61024a6102e0366004611d82565b610882565b61024a6102f3366004611d82565b610915565b610219610306366004611d82565b6109ab565b610244610319366004611ee9565b610a22565b61024a61032c366004611ee9565b610a91565b61024461033f366004611f1c565b610b18565b610244610352366004611f69565b610c2d565b6101f9610d3d565b61024461036d366004611fbe565b610d4c565b6102197f000000000000000000000000000000000000000000000000000000000000000081565b6102446103a7366004612060565b610db0565b6103bf6103ba366004611d82565b610de8565b6040805182516001600160a01b031681526020928301516001600160601b031692810192909252016101e8565b6101f96103fa366004611d82565b610eb6565b61024461040d36600461210b565b610f8c565b6101dc61042036600461212f565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61024a611072565b61024a610464366004611ee9565b600a6020526000908152604090205481565b60006001600160e01b0319821663780e9d6360e01b148061049b575061049b82611081565b92915050565b6060600080546104b090612159565b80601f01602080910402602001604051908101604052809291908181526020018280546104dc90612159565b80156105295780601f106104fe57610100808354040283529160200191610529565b820191906000526020600020905b81548152906001019060200180831161050c57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166105b15760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006105d8826109ab565b9050806001600160a01b0316836001600160a01b031614156106465760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016105a8565b336001600160a01b038216148061066257506106628133610420565b6106d45760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016105a8565b6106de83836110d1565b505050565b6106ed338261113f565b6107095760405162461bcd60e51b81526004016105a89061218e565b6106de838383611236565b600061071f83610a91565b82106107815760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016105a8565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b600e5460ff16156107ce576040516302ed543d60e51b815260040160405180910390fd5b600e805460ff19166001179055600b869055600c8590556107f1848484846113e1565b84867f898a2dec95856255977a0fb48cebc30051d50c0d8d33f93dea1e3ddb2e3424424260405161082491815260200190565b60405180910390a3505050505050565b6106de83838360405180602001604052806000815250610db0565b610859338261113f565b61087657604051636d8a29e760e11b815260040160405180910390fd5b61087f81611432565b50565b600061088d60085490565b82106108f05760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016105a8565b60088281548110610903576109036121df565b90600052602060002001549050919050565b600081815260026020526040812054600160a01b90046001600160601b03168061099c5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a206d696e742074696d657374616d7020717565727920666f72604482015271103737b732bc34b9ba32b73a103a37b5b2b760711b60648201526084016105a8565b6001600160601b031692915050565b6000818152600260205260408120546001600160a01b03168061049b5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016105a8565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a6b576040516313bd2e8360e31b815260040160405180910390fd5b6000600d60008154610a7c9061220b565b91829055509050610a8d82826114ce565b5050565b60006001600160a01b038216610afc5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016105a8565b506001600160a01b031660009081526003602052604090205490565b6001600160a01b038316610b3f576040516307eb16dd60e21b815260040160405180910390fd5b6000610b4a836109ab565b90506000610b5661161f565b6001600160a01b038381166000908152600a602090815260409182902080546001810190915582517f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad81840152938a168484015260608085018a9052608085019190915287013560a0808501919091528251808503909101815260c084019092528151910120610be9929160e001612226565b604051602081830303815290604052805190602001209050610c1c818385803603810190610c179190612241565b6116b4565b610c2685856110d1565b5050505050565b6001600160a01b038316610c54576040516307eb16dd60e21b815260040160405180910390fd5b6000610c5e61161f565b6001600160a01b038681166000818152600a602090815260409182902080546001810190915582517f47ab88482c90e4bb94b82a947ae78fa91fb25de1469ab491f4c15b9a0a2677ee9281019290925291810192909252918716606080830191909152861515608083015260a08201929092529084013560c082015260e00160405160208183030381529060405280519060200120604051602001610d04929190612226565b604051602081830303815290604052805190602001209050610d32818684803603810190610c179190612241565b610c26858585611798565b6060600180546104b090612159565b6001600160a01b038216331415610da55760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105a8565b610a8d338383611798565b610dba338361113f565b610dd65760405162461bcd60e51b81526004016105a89061218e565b610de284848484611805565b50505050565b60408051808201909152600080825260208201526000828152600260205260409020546001600160a01b0316610e775760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a20746f6b656e206461746120717565727920666f72206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b60648201526084016105a8565b506000908152600260209081526040918290208251808401909352546001600160a01b0381168352600160a01b90046001600160601b03169082015290565b6000818152600260205260409020546060906001600160a01b0316610eee5760405163677510db60e11b815260040160405180910390fd5b600b54600c54604051635ad18a4b60e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169263b5a3149692610f4792600401918252602082015260400190565b600060405180830381865afa158015610f64573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261049b91908101906122b6565b6000610f97836109ab565b90506000610fa361161f565b6001600160a01b0383166000908152600a60209081526040918290208054600181019091559151611014927f108ccda6d7331b00561a3eea66a2ae331622356585681c62731e4a01aae2261a92899260608a0135910193845260208401929092526040830152606082015260800190565b6040516020818303038152906040528051906020012060405160200161103b929190612226565b604051602081830303815290604052805190602001209050611069818385803603810190610c179190612241565b610de284611432565b600061107c61161f565b905090565b60006001600160e01b031982166380ac58cd60e01b14806110b257506001600160e01b03198216635b5e139f60e01b145b8061049b57506301ffc9a760e01b6001600160e01b031983161461049b565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190611106826109ab565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166111b85760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016105a8565b60006111c3836109ab565b9050806001600160a01b0316846001600160a01b031614806111fe5750836001600160a01b03166111f384610533565b6001600160a01b0316145b8061122e57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316611249826109ab565b6001600160a01b0316146112b15760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b60648201526084016105a8565b6001600160a01b0382166113135760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016105a8565b61131e838383611838565b6113296000826110d1565b6001600160a01b038316600090815260036020526040812080546001929061135290849061232d565b90915550506001600160a01b0382166000908152600360205260408120805460019290611380908490612344565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6113ed848484846118e5565b7f414cd0b34676984f09a5f76ce9718d4062e50283abe0e7e274a9a5b4e0c99c308484848442604051611424959493929190612385565b60405180910390a150505050565b600061143d826109ab565b905061144b81600084611838565b6114566000836110d1565b6001600160a01b038116600090815260036020526040812080546001929061147f90849061232d565b9091555050600082815260026020526040808220829055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6001600160a01b0382166115245760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105a8565b6000818152600260205260409020546001600160a01b0316156115895760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105a8565b61159560008383611838565b6001600160a01b03821660009081526003602052604081208054600192906115be908490612344565b90915550506000818152600260205260408082206001600160a01b038516600160a01b426001600160601b031602811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61164a6104a1565b80516020918201206040805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b42816060015110156116d957604051630819bdcd60e01b815260040160405180910390fd5b600060018483600001518460200151856040015160405160008152602001604052604051611723949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa158015611745573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158061177a5750826001600160a01b0316816001600160a01b031614155b15610de2576040516337e8456b60e01b815260040160405180910390fd5b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611810848484611236565b61181c848484846118fe565b610de25760405162461bcd60e51b81526004016105a8906123bf565b6118438383836119fc565b600b54600c546040516386e2947b60e01b815260048101929092526024820152604481018290526001600160a01b03848116606483015283811660848301527f000000000000000000000000000000000000000000000000000000000000000016906386e2947b9060a401600060405180830381600087803b1580156118c857600080fd5b505af11580156118dc573d6000803e3d6000fd5b50505050505050565b6118f160008585611c44565b50610c2660018383611c44565b60006001600160a01b0384163b156119f157604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611942903390899088908890600401612411565b6020604051808303816000875af192505050801561197d575060408051601f3d908101601f1916820190925261197a9181019061244e565b60015b6119d7573d8080156119ab576040519150601f19603f3d011682016040523d82523d6000602084013e6119b0565b606091505b5080516119cf5760405162461bcd60e51b81526004016105a8906123bf565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061122e565b506001949350505050565b6001600160a01b038316611a5757611a5281600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611a7a565b816001600160a01b0316836001600160a01b031614611a7a57611a7a8382611ab4565b6001600160a01b038216611a91576106de81611b51565b826001600160a01b0316826001600160a01b0316146106de576106de8282611c00565b60006001611ac184610a91565b611acb919061232d565b600083815260076020526040902054909150808214611b1e576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090611b639060019061232d565b60008381526009602052604081205460088054939450909284908110611b8b57611b8b6121df565b906000526020600020015490508060088381548110611bac57611bac6121df565b6000918252602080832090910192909255828152600990915260408082208490558582528120556008805480611be457611be461246b565b6001900381819060005260206000200160009055905550505050565b6000611c0b83610a91565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b828054611c5090612159565b90600052602060002090601f016020900481019282611c725760008555611cb8565b82601f10611c8b5782800160ff19823516178555611cb8565b82800160010185558215611cb8579182015b82811115611cb8578235825591602001919060010190611c9d565b50611cc4929150611cc8565b5090565b5b80821115611cc45760008155600101611cc9565b6001600160e01b03198116811461087f57600080fd5b600060208284031215611d0557600080fd5b8135611d1081611cdd565b9392505050565b60005b83811015611d32578181015183820152602001611d1a565b83811115610de25750506000910152565b60008151808452611d5b816020860160208601611d17565b601f01601f19169290920160200192915050565b602081526000611d106020830184611d43565b600060208284031215611d9457600080fd5b5035919050565b80356001600160a01b0381168114611db257600080fd5b919050565b60008060408385031215611dca57600080fd5b611dd383611d9b565b946020939093013593505050565b600080600060608486031215611df657600080fd5b611dff84611d9b565b9250611e0d60208501611d9b565b9150604084013590509250925092565b60008083601f840112611e2f57600080fd5b50813567ffffffffffffffff811115611e4757600080fd5b602083019150836020828501011115611e5f57600080fd5b9250929050565b60008060008060008060808789031215611e7f57600080fd5b8635955060208701359450604087013567ffffffffffffffff80821115611ea557600080fd5b611eb18a838b01611e1d565b90965094506060890135915080821115611eca57600080fd5b50611ed789828a01611e1d565b979a9699509497509295939492505050565b600060208284031215611efb57600080fd5b611d1082611d9b565b600060808284031215611f1657600080fd5b50919050565b600080600060c08486031215611f3157600080fd5b611f3a84611d9b565b925060208401359150611f508560408601611f04565b90509250925092565b80358015158114611db257600080fd5b60008060008060e08587031215611f7f57600080fd5b611f8885611d9b565b9350611f9660208601611d9b565b9250611fa460408601611f59565b9150611fb38660608701611f04565b905092959194509250565b60008060408385031215611fd157600080fd5b611fda83611d9b565b9150611fe860208401611f59565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561203057612030611ff1565b604052919050565b600067ffffffffffffffff82111561205257612052611ff1565b50601f01601f191660200190565b6000806000806080858703121561207657600080fd5b61207f85611d9b565b935061208d60208601611d9b565b925060408501359150606085013567ffffffffffffffff8111156120b057600080fd5b8501601f810187136120c157600080fd5b80356120d46120cf82612038565b612007565b8181528860208385010111156120e957600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b60008060a0838503121561211e57600080fd5b82359150611fe88460208501611f04565b6000806040838503121561214257600080fd5b61214b83611d9b565b9150611fe860208401611d9b565b600181811c9082168061216d57607f821691505b60208210811415611f1657634e487b7160e01b600052602260045260246000fd5b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561221f5761221f6121f5565b5060010190565b61190160f01b81526002810192909252602282015260420190565b60006080828403121561225357600080fd5b6040516080810181811067ffffffffffffffff8211171561227657612276611ff1565b604052823560ff8116811461228a57600080fd5b808252506020830135602082015260408301356040820152606083013560608201528091505092915050565b6000602082840312156122c857600080fd5b815167ffffffffffffffff8111156122df57600080fd5b8201601f810184136122f057600080fd5b80516122fe6120cf82612038565b81815285602083850101111561231357600080fd5b612324826020830160208601611d17565b95945050505050565b60008282101561233f5761233f6121f5565b500390565b60008219821115612357576123576121f5565b500190565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60608152600061239960608301878961235c565b82810360208401526123ac81868861235c565b9150508260408301529695505050505050565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061244490830184611d43565b9695505050505050565b60006020828403121561246057600080fd5b8151611d1081611cdd565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220c7700cff2046b6c291cb6cfcca2d977cfc839ca70b145dbb7538a489cd2f33a864736f6c634300080a0033";

type CollectNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CollectNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CollectNFT__factory extends ContractFactory {
  constructor(...args: CollectNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CollectNFT> {
    return super.deploy(hub, overrides || {}) as Promise<CollectNFT>;
  }
  getDeployTransaction(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, overrides || {});
  }
  attach(address: string): CollectNFT {
    return super.attach(address) as CollectNFT;
  }
  connect(signer: Signer): CollectNFT__factory {
    return super.connect(signer) as CollectNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CollectNFTInterface {
    return new utils.Interface(_abi) as CollectNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CollectNFT {
    return new Contract(address, _abi, signerOrProvider) as CollectNFT;
  }
}
