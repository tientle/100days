import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs'
    }),
    paths: {
      base: dev ? '' : '/100days'
    },
    prerender: {
      entries: ['*']
    }
  }
};

export default config;
