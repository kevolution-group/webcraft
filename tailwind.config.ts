import { plugins } from "./.eslintrc.cjs";

/** @type {import('tailwindcss').config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extends: {}
  },
  plugins: []
}
