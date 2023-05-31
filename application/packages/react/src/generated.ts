// Generated by @wagmi/cli@0.1.15 on 5/11/2023 at 2:12:44 PM
import {
  getContract,
  GetContractArgs,
  readContract,
  ReadContractConfig,
  writeContract,
  WriteContractArgs,
  WriteContractPreparedArgs,
  WriteContractUnpreparedArgs,
  prepareWriteContract,
  PrepareWriteContractConfig,
  watchContractEvent,
  WatchContractEventConfig,
  WatchContractEventCallback,
} from 'wagmi/actions'

import {
  useContract,
  UseContractConfig,
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC6551Registry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc6551RegistryABI = [
  { type: 'error', inputs: [], name: 'InitializationFailed' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'chainId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenContract',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'salt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AccountCreated',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'salt', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'account',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'salt', internalType: 'uint256', type: 'uint256' },
      { name: 'initData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createAccount',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
] as const

export const erc6551RegistryAddress =
  '0x02101dfB77FDE026414827Fdc604ddAF224F0921' as const

export const erc6551RegistryConfig = {
  address: erc6551RegistryAddress,
  abi: erc6551RegistryABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC6551Account
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc6551AccountABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'target',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'TransactionExecuted',
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'executeCall',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'nonce',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenContract', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Core
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link erc6551RegistryABI}__.
 */
export function getErc6551Registry(
  config: Omit<GetContractArgs, 'abi' | 'address'>,
) {
  return getContract({
    abi: erc6551RegistryABI,
    address: erc6551RegistryAddress,
    ...config,
  })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc6551RegistryABI}__.
 */
export function readErc6551Registry<
  TAbi extends readonly unknown[] = typeof erc6551RegistryABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi' | 'address'>) {
  return readContract({
    abi: erc6551RegistryABI,
    address: erc6551RegistryAddress,
    ...config,
  } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc6551RegistryABI}__.
 */
export function writeErc6551Registry<TFunctionName extends string>(
  config:
    | Omit<
        WriteContractPreparedArgs<typeof erc6551RegistryABI, TFunctionName>,
        'abi' | 'address'
      >
    | Omit<
        WriteContractUnpreparedArgs<typeof erc6551RegistryABI, TFunctionName>,
        'abi' | 'address'
      >,
) {
  return writeContract({
    abi: erc6551RegistryABI,
    address: erc6551RegistryAddress,
    ...config,
  } as WriteContractArgs<typeof erc6551RegistryABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link erc6551RegistryABI}__.
 */
export function prepareWriteErc6551Registry<
  TAbi extends readonly unknown[] = typeof erc6551RegistryABI,
  TFunctionName extends string = string,
>(
  config: Omit<
    PrepareWriteContractConfig<TAbi, TFunctionName>,
    'abi' | 'address'
  >,
) {
  return prepareWriteContract({
    abi: erc6551RegistryABI,
    address: erc6551RegistryAddress,
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc6551RegistryABI}__.
 */
export function watchErc6551RegistryEvent<
  TAbi extends readonly unknown[] = typeof erc6551RegistryABI,
  TEventName extends string = string,
>(
  config: Omit<WatchContractEventConfig<TAbi, TEventName>, 'abi' | 'address'>,
  callback: WatchContractEventCallback<TAbi, TEventName>,
) {
  return watchContractEvent(
    {
      abi: erc6551RegistryABI,
      address: erc6551RegistryAddress,
      ...config,
    } as WatchContractEventConfig<TAbi, TEventName>,
    callback,
  )
}

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link erc6551AccountABI}__.
 */
export function getErc6551Account(config: Omit<GetContractArgs, 'abi'>) {
  return getContract({ abi: erc6551AccountABI, ...config })
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc6551AccountABI}__.
 */
export function readErc6551Account<
  TAbi extends readonly unknown[] = typeof erc6551AccountABI,
  TFunctionName extends string = string,
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return readContract({
    abi: erc6551AccountABI,
    ...config,
  } as unknown as ReadContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc6551AccountABI}__.
 */
export function writeErc6551Account<TFunctionName extends string>(
  config:
    | Omit<
        WriteContractPreparedArgs<typeof erc6551AccountABI, TFunctionName>,
        'abi'
      >
    | Omit<
        WriteContractUnpreparedArgs<typeof erc6551AccountABI, TFunctionName>,
        'abi'
      >,
) {
  return writeContract({
    abi: erc6551AccountABI,
    ...config,
  } as WriteContractArgs<typeof erc6551AccountABI, TFunctionName>)
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link erc6551AccountABI}__.
 */
export function prepareWriteErc6551Account<
  TAbi extends readonly unknown[] = typeof erc6551AccountABI,
  TFunctionName extends string = string,
>(config: Omit<PrepareWriteContractConfig<TAbi, TFunctionName>, 'abi'>) {
  return prepareWriteContract({
    abi: erc6551AccountABI,
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>)
}

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc6551AccountABI}__.
 */
export function watchErc6551AccountEvent<
  TAbi extends readonly unknown[] = typeof erc6551AccountABI,
  TEventName extends string = string,
>(
  config: Omit<WatchContractEventConfig<TAbi, TEventName>, 'abi'>,
  callback: WatchContractEventCallback<TAbi, TEventName>,
) {
  return watchContractEvent(
    { abi: erc6551AccountABI, ...config } as WatchContractEventConfig<
      TAbi,
      TEventName
    >,
    callback,
  )
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContract}__ with `abi` set to __{@link erc6551RegistryABI}__.
 */
export function useErc6551Registry(
  config: Omit<UseContractConfig, 'abi' | 'address'> = {} as any,
) {
  return useContract({
    abi: erc6551RegistryABI,
    address: erc6551RegistryAddress,
    ...config,
  })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6551RegistryABI}__.
 */
export function useErc6551RegistryRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc6551RegistryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof erc6551RegistryABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'address'
  > = {} as any,
) {
  return useContractRead({
    abi: erc6551RegistryABI,
    address: erc6551RegistryAddress,
    ...config,
  } as UseContractReadConfig<
    typeof erc6551RegistryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6551RegistryABI}__ and `functionName` set to `"account"`.
 */
export function useErc6551RegistryAccount<
  TSelectData = ReadContractResult<typeof erc6551RegistryABI, 'account'>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc6551RegistryABI, 'account', TSelectData>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc6551RegistryABI,
    address: erc6551RegistryAddress,
    functionName: 'account',
    ...config,
  } as UseContractReadConfig<typeof erc6551RegistryABI, 'account', TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc6551RegistryABI}__.
 */
export function useErc6551RegistryWrite<
  TMode extends WriteContractMode,
  TFunctionName extends string,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof erc6551RegistryABI, string>['abi'],
        TFunctionName
      >
    : UseContractWriteConfig<
        TMode,
        typeof erc6551RegistryABI,
        TFunctionName
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<TMode, typeof erc6551RegistryABI, TFunctionName>({
    abi: erc6551RegistryABI,
    address: erc6551RegistryAddress,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc6551RegistryABI}__ and `functionName` set to `"createAccount"`.
 */
export function useErc6551RegistryCreateAccount<
  TMode extends WriteContractMode,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<
          typeof erc6551RegistryABI,
          'createAccount'
        >['abi'],
        'createAccount'
      > & { functionName?: 'createAccount' }
    : UseContractWriteConfig<
        TMode,
        typeof erc6551RegistryABI,
        'createAccount'
      > & {
        abi?: never
        functionName?: 'createAccount'
      } = {} as any,
) {
  return useContractWrite<TMode, typeof erc6551RegistryABI, 'createAccount'>({
    abi: erc6551RegistryABI,
    address: erc6551RegistryAddress,
    functionName: 'createAccount',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc6551RegistryABI}__.
 */
export function usePrepareErc6551RegistryWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc6551RegistryABI, TFunctionName>,
    'abi' | 'address'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc6551RegistryABI,
    address: erc6551RegistryAddress,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc6551RegistryABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc6551RegistryABI}__ and `functionName` set to `"createAccount"`.
 */
export function usePrepareErc6551RegistryCreateAccount(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc6551RegistryABI, 'createAccount'>,
    'abi' | 'address' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc6551RegistryABI,
    address: erc6551RegistryAddress,
    functionName: 'createAccount',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof erc6551RegistryABI,
    'createAccount'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc6551RegistryABI}__.
 */
export function useErc6551RegistryEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc6551RegistryABI, TEventName>,
    'abi' | 'address'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc6551RegistryABI,
    address: erc6551RegistryAddress,
    ...config,
  } as UseContractEventConfig<typeof erc6551RegistryABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc6551RegistryABI}__ and `eventName` set to `"AccountCreated"`.
 */
export function useErc6551RegistryAccountCreatedEvent(
  config: Omit<
    UseContractEventConfig<typeof erc6551RegistryABI, 'AccountCreated'>,
    'abi' | 'address' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc6551RegistryABI,
    address: erc6551RegistryAddress,
    eventName: 'AccountCreated',
    ...config,
  } as UseContractEventConfig<typeof erc6551RegistryABI, 'AccountCreated'>)
}

/**
 * Wraps __{@link useContract}__ with `abi` set to __{@link erc6551AccountABI}__.
 */
export function useErc6551Account(
  config: Omit<UseContractConfig, 'abi'> = {} as any,
) {
  return useContract({ abi: erc6551AccountABI, ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6551AccountABI}__.
 */
export function useErc6551AccountRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof erc6551AccountABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc6551AccountABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: erc6551AccountABI,
    ...config,
  } as UseContractReadConfig<
    typeof erc6551AccountABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6551AccountABI}__ and `functionName` set to `"nonce"`.
 */
export function useErc6551AccountNonce<
  TSelectData = ReadContractResult<typeof erc6551AccountABI, 'nonce'>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc6551AccountABI, 'nonce', TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc6551AccountABI,
    functionName: 'nonce',
    ...config,
  } as UseContractReadConfig<typeof erc6551AccountABI, 'nonce', TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6551AccountABI}__ and `functionName` set to `"owner"`.
 */
export function useErc6551AccountOwner<
  TSelectData = ReadContractResult<typeof erc6551AccountABI, 'owner'>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc6551AccountABI, 'owner', TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc6551AccountABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof erc6551AccountABI, 'owner', TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc6551AccountABI}__ and `functionName` set to `"token"`.
 */
export function useErc6551AccountToken<
  TSelectData = ReadContractResult<typeof erc6551AccountABI, 'token'>,
>(
  config: Omit<
    UseContractReadConfig<typeof erc6551AccountABI, 'token', TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: erc6551AccountABI,
    functionName: 'token',
    ...config,
  } as UseContractReadConfig<typeof erc6551AccountABI, 'token', TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc6551AccountABI}__.
 */
export function useErc6551AccountWrite<
  TMode extends WriteContractMode,
  TFunctionName extends string,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<typeof erc6551AccountABI, string>['abi'],
        TFunctionName
      >
    : UseContractWriteConfig<TMode, typeof erc6551AccountABI, TFunctionName> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<TMode, typeof erc6551AccountABI, TFunctionName>({
    abi: erc6551AccountABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc6551AccountABI}__ and `functionName` set to `"executeCall"`.
 */
export function useErc6551AccountExecuteCall<TMode extends WriteContractMode>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        TMode,
        PrepareWriteContractResult<
          typeof erc6551AccountABI,
          'executeCall'
        >['abi'],
        'executeCall'
      > & { functionName?: 'executeCall' }
    : UseContractWriteConfig<TMode, typeof erc6551AccountABI, 'executeCall'> & {
        abi?: never
        functionName?: 'executeCall'
      } = {} as any,
) {
  return useContractWrite<TMode, typeof erc6551AccountABI, 'executeCall'>({
    abi: erc6551AccountABI,
    functionName: 'executeCall',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc6551AccountABI}__.
 */
export function usePrepareErc6551AccountWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc6551AccountABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc6551AccountABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc6551AccountABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc6551AccountABI}__ and `functionName` set to `"executeCall"`.
 */
export function usePrepareErc6551AccountExecuteCall(
  config: Omit<
    UsePrepareContractWriteConfig<typeof erc6551AccountABI, 'executeCall'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: erc6551AccountABI,
    functionName: 'executeCall',
    ...config,
  } as UsePrepareContractWriteConfig<typeof erc6551AccountABI, 'executeCall'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc6551AccountABI}__.
 */
export function useErc6551AccountEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof erc6551AccountABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc6551AccountABI,
    ...config,
  } as UseContractEventConfig<typeof erc6551AccountABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc6551AccountABI}__ and `eventName` set to `"TransactionExecuted"`.
 */
export function useErc6551AccountTransactionExecutedEvent(
  config: Omit<
    UseContractEventConfig<typeof erc6551AccountABI, 'TransactionExecuted'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: erc6551AccountABI,
    eventName: 'TransactionExecuted',
    ...config,
  } as UseContractEventConfig<typeof erc6551AccountABI, 'TransactionExecuted'>)
}