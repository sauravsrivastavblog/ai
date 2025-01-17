// import { defineConfig } from 'astro/config';
// import mdx from '@astrojs/mdx';

// import sitemap from '@astrojs/sitemap';

// // https://astro.build/config
// export default defineConfig({
// 	site: 'https://example.com',
// 	integrations: [mdx(), sitemap()],
// });
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://sauravsrivastavblog.github.io',
	base: '/blog',
	base: '/ai',
	integrations: [mdx(), sitemap()],
});
