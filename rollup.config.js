import { dirname, relative, resolve } from 'path'
import { dts } from 'rollup-plugin-dts'
import typescript from '@rollup/plugin-typescript'
import packageJson from './package.json' assert { type: 'json' }

const dir = 'dist'

const useSrc = ({ dir: _dir, ext } = {}) => ({
	name: 'local:useSrc',
	resolveId(source, importer) {
		if (ext.some((e) => source.endsWith(e))) {
			const from = _dir ?? dirname(importer)
			const importerDir = dirname(importer)
			const original = resolve(importerDir, source)
			const relativePath = relative(from, original)
			return {
				id: relativePath,
				external: true,
			}
		}
	},
})

const external = [
	...Object.keys(packageJson.dependencies),
	...Object.keys(packageJson.peerDependencies),
]

export default [
	{
		input: 'src/index.ts',
		external,
		output: [
			{
				dir,
				format: 'es',
			},
		],
		plugins: [
			useSrc({
				ext: [
					'.astro',
					'.svelte',
					'.vue',
					'.scss',
					'.css',
					'.jpg',
					'.png',
					'.svg',
				],
				dir,
			}),
			typescript(),
		],
	},
	{
		input: 'dist/src/index.d.ts',
		output: [
			{
				file: 'dist/index.d.ts',
				format: 'es',
			},
		],
		plugins: [
			useSrc({
				ext: [
					'.astro',
					'.svelte',
					'.vue',
					'.scss',
					'.css',
					'.jpg',
					'.png',
					'.svg',
				],
				dir,
			}),
			dts(),
		],
	},
]
