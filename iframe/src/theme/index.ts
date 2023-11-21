import {
	type ClubsFunctionGetLayout,
	type ClubsFunctionThemePlugin,
	type ClubsThemePluginMeta,
	ClubsPluginCategory,
} from '@devprotocol/clubs-core'
import { default as Default } from './Default.astro'

export const getLayout = (async () => ({
	layout: Default,
})) satisfies ClubsFunctionGetLayout

export const meta = {
	id: 'theme',
	displayName: 'Theme',
	category: ClubsPluginCategory.Theme,
	theme: {
		previewImage: 'https://dummyimage.com/600x400/000/fff',
	},
} satisfies ClubsThemePluginMeta

export default {
	getLayout,
	meta,
} satisfies ClubsFunctionThemePlugin
