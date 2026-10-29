/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#050507',
          surface: '#0B0D12',
          card: '#10131A',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(253, 48, 1, 0.4)',
          muted: '#8E98A8',
          // Color exacto extraído del logotipo de Hugo Repuestos (#FD3001)
          accent: '#FD3001',
          'accent-hover': '#FF4D24',
          'accent-light': '#FF6542',
          'accent-glow': 'rgba(253, 48, 1, 0.35)',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20BA5A',
          glow: 'rgba(37, 211, 102, 0.35)',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.94', transform: 'scale(1.01)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
