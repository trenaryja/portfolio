import { defineConfig } from '@trenaryja/config/eslint'

export default [
	...defineConfig(),
	{
		// scripts/ drive a headless browser one page at a time — sequential automation
		// (shared browser, per-page geolocation, politeness to external sites), like a
		// provisioning script — so await-in-loop is the idiom, not a mistake.
		files: ['scripts/**'],
		rules: { 'no-await-in-loop': 'off' },
	},
]
