/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neonFuchsia: "#FF00FF",
        neonTurquoise: "#00FFF0", 
        neonYellow: "#FFFF00",
        neonGreen: "#00FF00",
        neonOrange: "#FF6600",
        darkBg: "#0D0D0D",
        darkCard: "#1A1A1A",
        darkBorder: "#333333",
      },
      fontFamily: {
        'casino': ['Orbitron', 'monospace'],
        'corporate': ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-neon': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-neon': 'bounce 1s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 
            textShadow: '0 0 5px #FF00FF, 0 0 10px #FF00FF, 0 0 15px #FF00FF',
          },
          '100%': { 
            textShadow: '0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 30px #FF00FF',
          },
        },
      },
    },
  },
  plugins: [],
};
