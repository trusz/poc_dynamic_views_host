import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from "@vite-pwa/sveltekit"
import { defineConfig } from 'vite';

export default defineConfig({
	server:{
		port: 52276,
	},
	plugins: [
		sveltekit(),
		SvelteKitPWA(),
	]
});
