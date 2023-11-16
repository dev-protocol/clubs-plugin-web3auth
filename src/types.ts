export type Web3AuthButtonOptions = Readonly<{
	label?: string
	class?: string
	overrideClass?: string
	rpcUrl?: string
	chainId?: number
	isDisabled?: boolean
	redirectOnSignin?: boolean
}>

export type Web3AuthButtonEnvs = Readonly<{
	web3authClientId: string
	web3authNetwork: 'sapphire_devnet' | 'sapphire_mainnet'
	web3authInfuraKey: string
}>
