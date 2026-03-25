// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// Set PUBLIC_SITE_URL in .env for production (e.g. https://yoursite.com) so Open Graph URLs are absolute.
// https://astro.build/config
export default defineConfig({
	site: process.env.PUBLIC_SITE_URL || undefined,
	vite: {
		plugins: [tailwindcss()],
	},
});
