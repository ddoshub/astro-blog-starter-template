import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',   // 关键！必须 static
  adapter: cloudflare(),
});
