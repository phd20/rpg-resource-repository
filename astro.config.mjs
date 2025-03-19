// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'RPG Resource Repository',
			social: {
				github: 'https://github.com/phd20/rpg-resource-repository',
				patreon: 'https://www.patreon.com/phd20',
				discourse: 'https://forum.phd20.com'
			},
			sidebar: [
				{ slug: 'reference/overview' },
				{ slug: 'reference/license' },
				{
					label: 'Backgrounds',
					autogenerate: { directory: 'backgrounds' },
				},
				{
					label: 'Feats',
					autogenerate: { directory: 'feats' },
				},
				{
					label: 'Magic Items',
					autogenerate: { directory: 'magic-items' },
				},
				{ slug: 'maps/overview' },
				{
					label: 'Random Tables',
					autogenerate: { directory: 'random-tables' },
				},
			],
		}),
	],
});
