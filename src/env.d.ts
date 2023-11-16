/* eslint-disable functional/type-declaration-immutability */
/// <reference types="astro/client" />

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
