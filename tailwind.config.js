// tailwind.config.js
// tailwind.config.js
module.exports = {
  content: ['./views/**/*.pug'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '24px',
          lg: '100px',
        },
      },
      colors: {
        'button-color': '#6666ff',
        'button-hover': '#b3b3ff',
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(255, 255, 255, 0)' }, // Glow at start and end
          '50%': { textShadow: '0 0 40px rgba(255, 255, 255, 0.4)' }, // Stronger glow at 50%
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite', // Animation duration and repeat
      },
    },
  },
  plugins: [],
}
