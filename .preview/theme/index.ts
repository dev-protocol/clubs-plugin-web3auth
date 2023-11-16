import {
	type ClubsFunctionGetAdminPaths,
	type ClubsFunctionGetPagePaths,
	type ClubsFunctionGetLayout,
	type ClubsFunctionThemePlugin,
	ClubsPluginCategory,
	ClubsThemePluginMeta,
} from '@devprotocol/clubs-core'
import { default as Default } from './Default.astro'
import Debug from './debug.astro'

export const getPagePaths = (async () => [
	{ paths: [], component: Debug },
]) satisfies ClubsFunctionGetPagePaths

export const getAdminPaths = (async () => [
	{ paths: [], component: Debug },
]) satisfies ClubsFunctionGetAdminPaths

export const getLayout = (async () => ({
	layout: Default,
})) satisfies ClubsFunctionGetLayout

export const meta = {
	id: 'example-theme',
	displayName: 'Example theme',
	category: ClubsPluginCategory.Theme,
	theme: {
		previewImage: 'https://dummyimage.com/600x400/000/fff',
	},
} satisfies ClubsThemePluginMeta

export default {
	getPagePaths,
	getAdminPaths,
	getLayout,
	meta,
} satisfies ClubsFunctionThemePlugin
