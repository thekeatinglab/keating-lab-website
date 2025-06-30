module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          800: '#57068C',
        },
        blue: {
          300: '#2563EB',
        },
        gray: {
          50: '#F9FAFB',
          600: '#4B5563',
        },
      },
      fontFamily: {
        harding: ['Harding', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-nav': 'linear-gradient(to right, #57068C, #4A0577)',
      },
    },
  },
  plugins: [],
};