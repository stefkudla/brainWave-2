module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        inter: 'Inter',
      },
    },
  },
  plugins: [],
};
