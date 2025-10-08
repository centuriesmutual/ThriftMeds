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
          green: '#1B5E20',      // Dark forest green (Target-inspired)
          lightGreen: '#2E7D32', // Lighter green for accents
          red: '#E53E3E',        // Clean red for CTAs
          black: '#1A1A1A',      // Deep black
          gray: '#6B7280',       // Professional gray
          lightGray: '#F9FAFB',  // Clean light gray
          darkGray: '#374151',   // Dark gray
          white: '#FFFFFF',      // Pure white
          accent: '#10B981',     // Emerald accent
        },
        target: {
          green: '#1B5E20',      // Dark forest green
          lightGreen: '#2E7D32', // Lighter green
          red: '#E53E3E',        // Clean red
          black: '#1A1A1A',      // Deep black
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
