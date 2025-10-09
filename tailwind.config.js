/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#0097A9',      // Teal blue (Walgreens-inspired)
          lightGreen: '#00B4CC', // Lighter teal for accents
          red: '#E31837',        // Walgreens red
          black: '#000000',      // Pure black
          gray: '#6B7280',       // Professional gray
          lightGray: '#F9FAFB',  // Clean light gray
          darkGray: '#374151',   // Dark gray
          white: '#FFFFFF',      // Pure white
          accent: '#0097A9',     // Teal accent
        },
        target: {
          green: '#0097A9',      // Teal blue
          lightGreen: '#00B4CC', // Lighter teal
          red: '#E31837',        // Walgreens red
          black: '#000000',      // Pure black
          gray: '#6B7280',       // Professional gray
          lightGray: '#F9FAFB',  // Clean backgrounds
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
