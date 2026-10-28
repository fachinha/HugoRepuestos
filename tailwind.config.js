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
          dark: '#0B0F17',
          card: '#111827',
          border: '#1F2937',
          muted: '#9CA3AF',
          accent: '#DC2626',
          'accent-hover': '#EF4444',
          'accent-glow': 'rgba(220, 38, 38, 0.35)',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20BA5A',
          glow: 'rgba(37, 211, 102, 0.4)',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.02)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(37, 211, 102, 0.25)' },
          '100%': { boxShadow: '0 0 25px rgba(37, 211, 102, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
