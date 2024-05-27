import react from '@vitejs/plugin-react-swc'
import { resolve, relative, extname } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ['lib'] })
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: [
        '@iconify/tailwind',
        '@radix-ui/react-label',
        '@radix-ui/react-slot',
        'class-variance-authority',
        'clsx',
        'react',
        'react/jsx-runtime',
        'react-hook-form',
        'tailwind-merge',
        'tailwindcss',
        'tailwindcss/defaultTheme',
        'tailwindcss-animate',
      ],
      input: Object.fromEntries(
        glob.sync(['lib/**/*.{ts,tsx}', 'lib/webcraft.css'], {
          ignore: ["lib/**/*.d.ts"],
        }).map(file => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative(
            'lib',
            file.slice(0, file.length - extname(file).length)
          ),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        assetFileNames: 'css/[name][extname]',
        entryFileNames: '[name].js',
      }
    }
  }
})
