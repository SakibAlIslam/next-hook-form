import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: "var(--primaryText)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        disableText: "var(--disableText)",
      },
      keyframes: {
        'gradient-border': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'gradient-border': 'gradient-border 1s linear infinite', // Adjust duration as needed
      },
    },
  },
  plugins: [],
} satisfies Config;
