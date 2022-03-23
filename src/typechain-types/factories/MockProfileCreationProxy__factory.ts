/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockProfileCreationProxy,
  MockProfileCreationProxyInterface,
} from "../MockProfileCreationProxy";

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
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "string",
            name: "handle",
            type: "string",
          },
          {
            internalType: "string",
            name: "imageURI",
            type: "string",
          },
          {
            internalType: "address",
            name: "followModule",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "followModuleData",
            type: "bytes",
          },
          {
            internalType: "string",
            name: "followNFTURI",
            type: "string",
          },
        ],
        internalType: "struct DataTypes.CreateProfileData",
        name: "vars",
        type: "tuple",
      },
    ],
    name: "proxyCreateProfile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161033438038061033483398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516102aa61008a6000396000605f01526102aa6000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806307e5f94814610030575b600080fd5b61004361003e3660046100c9565b610045565b005b6040516001620af63960e11b031981526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063ffea138e9061009490849060040161019d565b600060405180830381600087803b1580156100ae57600080fd5b505af11580156100c2573d6000803e3d6000fd5b5050505050565b6000602082840312156100db57600080fd5b813567ffffffffffffffff8111156100f257600080fd5b820160c0818503121561010457600080fd5b9392505050565b80356001600160a01b038116811461012257600080fd5b919050565b6000808335601e1984360301811261013e57600080fd5b830160208101925035905067ffffffffffffffff81111561015e57600080fd5b80360383131561016d57600080fd5b9250929050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6020815260006001600160a01b03806101b58561010b565b1660208401526101c86020850185610127565b60c060408601526101dd60e086018284610174565b9150506101ed6040860186610127565b601f1980878503016060880152610205848385610174565b93508461021460608a0161010b565b1660808801526102276080890189610127565b95509250808785030160a0880152610240848685610174565b945061024f60a0890189610127565b94509250808786030160c0880152505061026a838383610174565b969550505050505056fea2646970667358221220a7320a218749663386f11f2d922d02d6e3c0df11b3a77fe6d9998afc91ebe94164736f6c634300080a0033";

type MockProfileCreationProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockProfileCreationProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockProfileCreationProxy__factory extends ContractFactory {
  constructor(...args: MockProfileCreationProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockProfileCreationProxy> {
    return super.deploy(
      hub,
      overrides || {}
    ) as Promise<MockProfileCreationProxy>;
  }
  getDeployTransaction(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, overrides || {});
  }
  attach(address: string): MockProfileCreationProxy {
    return super.attach(address) as MockProfileCreationProxy;
  }
  connect(signer: Signer): MockProfileCreationProxy__factory {
    return super.connect(signer) as MockProfileCreationProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockProfileCreationProxyInterface {
    return new utils.Interface(_abi) as MockProfileCreationProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockProfileCreationProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockProfileCreationProxy;
  }
}
