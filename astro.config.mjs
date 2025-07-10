import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// Plugin Vite que forza UTF-8 en lectura de archivos .astro y .html
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
  vite: {
    plugins: [forceUtf8Plugin],
    server: {
      fs: {
        strict: false, // permite leer fuera del root
      },
    },
  },
});

