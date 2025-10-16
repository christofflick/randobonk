export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        megabonk: {
          purple: '#9333ea',
          pink: '#ec4899',
          cyan: '#06b6d4',
          yellow: '#facc15',
          green: '#22c55e',
          dark: '#0a0a0f',
          darker: '#050507',
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
      },
    },
  },
  plugins: [],
}
