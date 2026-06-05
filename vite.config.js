import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import matter from 'gray-matter';

// Transforms each .md file into a JS module exporting { frontmatter, content }
// Parsing happens in Node.js at build/dev time — no browser polyfills needed.
function markdownPlugin() {
  return {
    name: 'vite-plugin-markdown',
    transform(code, id) {
      if (!id.endsWith('.md')) return null;
      const { data: frontmatter, content } = matter(code);
      return {
        code: `export default ${JSON.stringify({ frontmatter, content })};`,
        map: null,
      };
    },
  };
}

export default defineConfig({
  plugins: [react(), markdownPlugin()],
});
