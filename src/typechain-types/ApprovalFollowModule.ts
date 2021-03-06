/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ApprovalFollowModuleInterface extends utils.Interface {
  functions: {
    "HUB()": FunctionFragment;
    "approve(uint256,address[],bool[])": FunctionFragment;
    "followModuleTransferHook(uint256,address,address,uint256)": FunctionFragment;
    "initializeFollowModule(uint256,bytes)": FunctionFragment;
    "isApproved(address,uint256,address)": FunctionFragment;
    "isApprovedArray(address,uint256,address[])": FunctionFragment;
    "processFollow(address,uint256,bytes)": FunctionFragment;
    "validateFollow(uint256,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "HUB", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [BigNumberish, string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "followModuleTransferHook",
    values: [BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeFollowModule",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isApproved",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedArray",
    values: [string, BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "processFollow",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validateFollow",
    values: [BigNumberish, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "HUB", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "followModuleTransferHook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeFollowModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isApproved", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processFollow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateFollow",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ApprovalFollowModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ApprovalFollowModuleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    HUB(overrides?: CallOverrides): Promise<[string]>;

    approve(
      profileId: BigNumberish,
      addresses: string[],
      toApprove: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    followModuleTransferHook(
      profileId: BigNumberish,
      from: string,
      to: string,
      followNFTTokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeFollowModule(
      profileId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isApproved(
      profileOwner: string,
      profileId: BigNumberish,
      toCheck: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isApprovedArray(
      profileOwner: string,
      profileId: BigNumberish,
      toCheck: string[],
      overrides?: CallOverrides
    ): Promise<[boolean[]]>;

    processFollow(
      follower: string,
      profileId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validateFollow(
      profileId: BigNumberish,
      follower: string,
      followNFTTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  HUB(overrides?: CallOverrides): Promise<string>;

  approve(
    profileId: BigNumberish,
    addresses: string[],
    toApprove: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  followModuleTransferHook(
    profileId: BigNumberish,
    from: string,
    to: string,
    followNFTTokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeFollowModule(
    profileId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isApproved(
    profileOwner: string,
    profileId: BigNumberish,
    toCheck: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isApprovedArray(
    profileOwner: string,
    profileId: BigNumberish,
    toCheck: string[],
    overrides?: CallOverrides
  ): Promise<boolean[]>;

  processFollow(
    follower: string,
    profileId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validateFollow(
    profileId: BigNumberish,
    follower: string,
    followNFTTokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    HUB(overrides?: CallOverrides): Promise<string>;

    approve(
      profileId: BigNumberish,
      addresses: string[],
      toApprove: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    followModuleTransferHook(
      profileId: BigNumberish,
      from: string,
      to: string,
      followNFTTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeFollowModule(
      profileId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    isApproved(
      profileOwner: string,
      profileId: BigNumberish,
      toCheck: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isApprovedArray(
      profileOwner: string,
      profileId: BigNumberish,
      toCheck: string[],
      overrides?: CallOverrides
    ): Promise<boolean[]>;

    processFollow(
      follower: string,
      profileId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    validateFollow(
      profileId: BigNumberish,
      follower: string,
      followNFTTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    HUB(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      profileId: BigNumberish,
      addresses: string[],
      toApprove: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    followModuleTransferHook(
      profileId: BigNumberish,
      from: string,
      to: string,
      followNFTTokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeFollowModule(
      profileId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isApproved(
      profileOwner: string,
      profileId: BigNumberish,
      toCheck: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedArray(
      profileOwner: string,
      profileId: BigNumberish,
      toCheck: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    processFollow(
      follower: string,
      profileId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validateFollow(
      profileId: BigNumberish,
      follower: string,
      followNFTTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      profileId: BigNumberish,
      addresses: string[],
      toApprove: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    followModuleTransferHook(
      profileId: BigNumberish,
      from: string,
      to: string,
      followNFTTokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeFollowModule(
      profileId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isApproved(
      profileOwner: string,
      profileId: BigNumberish,
      toCheck: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedArray(
      profileOwner: string,
      profileId: BigNumberish,
      toCheck: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    processFollow(
      follower: string,
      profileId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validateFollow(
      profileId: BigNumberish,
      follower: string,
      followNFTTokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
