import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

const forceUtf8Plugin = {
  name: 'force-utf8',
  enforce: 'pre',
  transform(code, id) {
    if (id.endsWith('.astro') || id.endsWith('.html')) {
      const buffer = Buffer.from(code, 'utf8');
      return {
        code: buffer.toString('utf8'),
        map: null,
      };
    }
  }
};

export default defineConfig({
  integrations: [tailwind()],
  devToolbar: { enabled: false },
  vite: {
    plugins: [forceUtf8Plugin],
    server: { fs: { strict: false } },
  },
});