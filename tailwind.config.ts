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
          DEFAULT: '#0A0A0C',
          light: '#121215',
          lighter: '#1A1A1E',
        },
        surface: {
          DEFAULT: '#18181B',
          hover: '#222226',
          active: '#2A2A30',
        },
        charcoal: {
          DEFAULT: '#27272A',
          subtle: '#3F3F46',
        },
        offwhite: '#F4F4F5',
        mutedzinc: '#A1A1AA',
        electric: {
          violet: '#6366F1',
          cyan: '#06B6D4',
          glow: 'rgba(99, 102, 241, 0.15)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.18) 0%, rgba(6, 182, 212, 0.08) 35%, rgba(10, 10, 12, 0) 70%)',
        'card-glow': 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.08), transparent 40%)',
        'violet-cyan': 'linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)',
      },
      boxShadow: {
        'glow-violet': '0 0 25px -5px rgba(99, 102, 241, 0.3)',
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'border-glow': 'border-glow 4s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(99, 102, 241, 0.4)' },
          '50%': { borderColor: 'rgba(6, 182, 212, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
