import { Config } from 'tailwindcss';
import { tailwindTheme, tailwindPlugins } from './lib/tailwind';

export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: tailwindTheme,
  plugins: tailwindPlugins,
} satisfies Config
