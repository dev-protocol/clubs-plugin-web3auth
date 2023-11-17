/* eslint-disable functional/type-declaration-immutability */
/// <reference types="astro/client" />

import type { Web3Auth } from '@web3auth/modal'
import type { Constructor } from 'type-fest'

interface ImportMetaEnv {
	readonly PUBLIC_INFURA_KEY: string
	readonly PUBLIC_WEB3AUTH_CLIENT_ID: string
	readonly PUBLIC_WEB3AUTH_NETWORK: 'sapphire_devnet' | 'sapphire_mainnet'
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
declare module '*.astro' {
	import type { AstroComponentFactory } from 'astro/dist/runtime/server'
	export default InstanceType<AstroComponentFactory>
}

declare global {
	interface Window {
		Modal: {
			Web3Auth: Constructor<Web3Auth>
		}
	}
}
