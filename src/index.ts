import type {
	ClubsFunctionGetPagePaths,
	ClubsFunctionGetSlots,
	ClubsFunctionPlugin,
	ClubsPluginMeta,
} from '@devprotocol/clubs-core'
import { ClubsPluginCategory } from '@devprotocol/clubs-core'
import { ConnectButton } from './components'
import Readme from './readme.astro'
import Iframe from './pages/iframe.astro'
import Layout from './layouts/Default.astro'

export const getPagePaths = (async () => [
	{ paths: [meta.id, 'iframe'], component: Iframe, layout: Layout },
]) satisfies ClubsFunctionGetPagePaths

const getSlots = (async (_, { chainId, rpcUrl }) => {
	return [
		{
			slot: 'clubs:connect-button',
			component: ConnectButton,
			props: {
				chainId,
				rpcUrl,
			},
		},
	]
}) satisfies ClubsFunctionGetSlots

const meta = {
	id: 'devprotocol:clubs:plugin:web3auth',
	displayName: 'Web3Auth',
	category: ClubsPluginCategory.Uncategorized,
	readme: Readme,
} satisfies ClubsPluginMeta

export default {
	getPagePaths,
	getSlots,
	meta,
} satisfies ClubsFunctionPlugin

export * from './types'
