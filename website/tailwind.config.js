const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.60rem',
      sm: '0.75rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'Public Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
          'dark-blue': 'hsl(233, 26%, 24%)',
          'lime-green': 'hsl(136, 65%, 51%)',
          'bright-cyan': 'hsl(192, 70%, 51%)',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        neutral: {
          'grayish-blue': 'hsl(233, 8%, 62%)',
          'light-grayish-blue': 'hsl(220, 16%, 96%)',
          'very-light-gray': 'hsl(0, 0%, 98%)',
          white: 'hsl(0, 0%, 100%)',
        },
        'app-color-100': '#FFFFFF',
        'app-color-200': '#EEEEEE',
        'app-color-300': '#A3A3A3',
        'app-color-400': '#525252',
        'app-color-500': '#1F1F1F',
        'app-color-600': '#2C4DCA',
      },
      backgroundImage: () => ({
        'header-desktop': "url('/images/bg-intro-desktop.svg')",
        'header-mobile': "url('/images/bg-intro-mobile.svg')",
        'image-mockups': "url('/images/image-mockups.png')",
      }),
      backgroundSize: {
        'custom-mobile-header-size': '100% 50%',
        'custom-mobile-mockup-size': 'auto 60%',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '6.5rem',
        },
      },
      inset: {
        '-42.6%': '-42.6%',
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
