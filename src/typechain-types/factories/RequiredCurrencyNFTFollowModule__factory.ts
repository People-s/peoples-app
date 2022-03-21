/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RequiredCurrencyNFTFollowModule,
  RequiredCurrencyNFTFollowModuleInterface,
} from "../RequiredCurrencyNFTFollowModule";

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
    name: "FollowInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "InitParamsInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "NotHub",
    type: "error",
  },
  {
    inputs: [],
    name: "PasscodeInvalid",
    type: "error",
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
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
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
        name: "followNFTTokenId",
        type: "uint256",
      },
    ],
    name: "followModuleTransferHook",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "initializeFollowModule",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "follower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "processFollow",
    outputs: [],
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
        internalType: "address",
        name: "follower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "followNFTTokenId",
        type: "uint256",
      },
    ],
    name: "validateFollow",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610b81380380610b8183398101604081905261002f916100a0565b806001600160a01b038116610057576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b03811660808190526040514281527ff1a1fa6b64aa95186f5a1285e76198d0da80d9c5a88062641d447f1d7c54e56c9060200160405180910390a250506100d0565b6000602082840312156100b257600080fd5b81516001600160a01b03811681146100c957600080fd5b9392505050565b608051610a896100f86000396000818160b30152818161035f01526105410152610a896000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630e096ae11461005c5780633cb22cc4146100715780639713958a14610085578063a4c52b86146100ae578063b4616a2a146100ed575b600080fd5b61006f61006a36600461080a565b610100565b005b61006f61007f366004610866565b50505050565b6100986100933660046108ae565b610352565b6040516100a59190610947565b60405180910390f35b6100d57f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100a5565b61006f6100fb366004610961565b610528565b60008381526020819052604090205415610228576000838152600260205260408082205490516370a0823160e01b81526001600160a01b038781166004830152909116919082906370a0823190602401602060405180830381865afa15801561016d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101919190610999565b90506101c26040518060400160405280600d81526020016c1d5cd95c939195105b5bdd5b9d609a1b815250826106fe565b6000858152602081905260409020548110156102255760405162461bcd60e51b815260206004820152601a60248201527f4e6f7420656e6f756768204e46545320746f20666f6c6c6f772100000000000060448201526064015b60405180910390fd5b50505b6000838152600160205260409020541561007f576000838152600360205260408082205490516370a0823160e01b81526001600160a01b038781166004830152909116919082906370a0823190602401602060405180830381865afa158015610295573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b99190610999565b90506102ec6040518060400160405280600f81526020016e1d5cd95c915490cc8c105b5bdd5b9d608a1b815250826106fe565b60008581526001602052604090205481101561034a5760405162461bcd60e51b815260206004820152601b60248201527f4e6f7420656e6f75676820455243323020746f20666f6c6c6f77210000000000604482015260640161021c565b505050505050565b6060336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461039d576040516313bd2e8360e31b815260040160405180910390fd5b60008080806103ae868801886109b2565b93509350935093506103e26040518060400160405280600a8152602001694e46544164647265737360b01b81525085610747565b61040d60405180604001604052806009815260200168139195105b5bdd5b9d60ba1b815250846106fe565b61043b6040518060400160405280600c81526020016b45524332304164647265737360a01b81525083610747565b61047160405180604001604052806014815260200173139195115490cc8c105b5bdd5b9d105b5bdd5b9d60621b815250826106fe565b82156104aa576000888152602081815260408083208690556002909152902080546001600160a01b0319166001600160a01b0386161790555b80156104e55760008881526001602090815260408083208490556003909152902080546001600160a01b0319166001600160a01b0384161790555b86868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929b9a5050505050505050505050565b60405163a9ec656360e01b8152600481018490526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9ec656390602401602060405180830381865afa158015610590573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b491906109ea565b90506001600160a01b0381166105dd57604051636992d36b60e11b815260040160405180910390fd5b81610669576040516370a0823160e01b81526001600160a01b0384811660048301528216906370a0823190602401602060405180830381865afa158015610628573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064c9190610999565b61007f57604051636992d36b60e11b815260040160405180910390fd5b6040516331a9108f60e11b8152600481018390526001600160a01b038085169190831690636352211e90602401602060405180830381865afa1580156106b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d791906109ea565b6001600160a01b03161461007f57604051636992d36b60e11b815260040160405180910390fd5b6107438282604051602401610714929190610a07565b60408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b179052610788565b5050565b610743828260405160240161075d929190610a29565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b1790525b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6001600160a01b03811681146107be57600080fd5b50565b60008083601f8401126107d357600080fd5b50813567ffffffffffffffff8111156107eb57600080fd5b60208301915083602082850101111561080357600080fd5b9250929050565b6000806000806060858703121561082057600080fd5b843561082b816107a9565b935060208501359250604085013567ffffffffffffffff81111561084e57600080fd5b61085a878288016107c1565b95989497509550505050565b6000806000806080858703121561087c57600080fd5b84359350602085013561088e816107a9565b9250604085013561089e816107a9565b9396929550929360600135925050565b6000806000604084860312156108c357600080fd5b83359250602084013567ffffffffffffffff8111156108e157600080fd5b6108ed868287016107c1565b9497909650939450505050565b6000815180845260005b8181101561092057602081850181015186830182015201610904565b81811115610932576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061095a60208301846108fa565b9392505050565b60008060006060848603121561097657600080fd5b833592506020840135610988816107a9565b929592945050506040919091013590565b6000602082840312156109ab57600080fd5b5051919050565b600080600080608085870312156109c857600080fd5b84356109d3816107a9565b935060208501359250604085013561089e816107a9565b6000602082840312156109fc57600080fd5b815161095a816107a9565b604081526000610a1a60408301856108fa565b90508260208301529392505050565b604081526000610a3c60408301856108fa565b905060018060a01b0383166020830152939250505056fea26469706673582212206f2f8ffe2c80832eae79d6234c9f971e8e2fcf5c8f2b2ed9586f3597f3d5b6c464736f6c634300080a0033";

type RequiredCurrencyNFTFollowModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RequiredCurrencyNFTFollowModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RequiredCurrencyNFTFollowModule__factory extends ContractFactory {
  constructor(...args: RequiredCurrencyNFTFollowModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RequiredCurrencyNFTFollowModule> {
    return super.deploy(
      hub,
      overrides || {}
    ) as Promise<RequiredCurrencyNFTFollowModule>;
  }
  getDeployTransaction(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, overrides || {});
  }
  attach(address: string): RequiredCurrencyNFTFollowModule {
    return super.attach(address) as RequiredCurrencyNFTFollowModule;
  }
  connect(signer: Signer): RequiredCurrencyNFTFollowModule__factory {
    return super.connect(signer) as RequiredCurrencyNFTFollowModule__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RequiredCurrencyNFTFollowModuleInterface {
    return new utils.Interface(
      _abi
    ) as RequiredCurrencyNFTFollowModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RequiredCurrencyNFTFollowModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RequiredCurrencyNFTFollowModule;
  }
}
