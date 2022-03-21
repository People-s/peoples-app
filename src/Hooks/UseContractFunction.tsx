import {
    TransactionStatus,
    useContractFunction as useDappUseContractFunction,
} from '@usedapp/core';
import { Contract } from 'ethers';

interface UseContractFunctionReturnType<
    ContractType extends Contract,
    Key extends keyof ContractType['functions'],
    Args extends Parameters<ContractType['functions'][Key]>,
    > {
    send: (...args: Args) => Promise<void>;
    state: TransactionStatus;
}

function useContractFunction<
    ContractType extends Contract,
    Key extends keyof ContractType['functions'],
    Args extends Parameters<ContractType['functions'][Key]>,
    >(
        contract: ContractType,
        functionName: Key,
): UseContractFunctionReturnType<ContractType, Key, Args> {
    const { send, state } = useDappUseContractFunction(
        contract,
        functionName as any ,
    );
    return { send: (...args: Args) => send(...args), state };

}
export { useContractFunction };