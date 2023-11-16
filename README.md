# Clubs Plugin for web3auth

Clubs plugin for integrating [web3auth](https://web3auth.io/) as a wallet provider.

## Required change for your `astro.config.js`

In order for vite to build web3auth npm package correctly, Astro needs to load [vite-plugin-node-polyfills](https://www.npmjs.com/package/vite-plugin-node-polyfills) as follows.

```js
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
	vite: {
		plugins: [nodePolyfills()],
	},
})
```
