import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0B0E14',
          subtle: '#0D1117',
          header: '#161B22',
        },
        hairline: {
          DEFAULT: '#21262D',
          hover: '#30363D',
        },
        slate: {
          stark: '#F0F6FC',
          subhead: '#8B949E',
          muted: '#C9D1D9',
        },
        accent: {
          emerald: '#238636',
          emeraldHover: '#2EA043',
          emeraldLight: '#10B981',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        subtle: '0 1px 2px rgba(0, 0, 0, 0.4)',
        panel: '0 8px 24px rgba(0, 0, 0, 0.45)',
      },
    },
  },
  plugins: [],
}

export default config
