import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          100: '#ffe4ec',
          200: '#ffc9db',
          300: '#ff9eba',
          400: '#ff6b9d',
          500: '#ff3d7f',
          600: '#ff1361',
          700: '#e6004c',
          800: '#cc0052',
          900: '#b3004d',
        },
        gold: {
          100: '#fff9e6',
          200: '#fff0cc',
          300: '#ffe399',
          400: '#ffd666',
          500: '#ffcc00',
          600: '#e6b800',
          700: '#cca300',
          800: '#b38f00',
          900: '#997a00',
        },
        red: {
          50: '#fff0f0',
          100: '#ffe0e0',
          500: '#ef4444',
          600: '#dc2626',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
