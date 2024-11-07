/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/hospital-app/src/**/*.{html,ts}",
    "./projects/ng-button/src/**/*.{html,ts}",
    "./projects/ng-check-box/src/**/*.{html,ts}",
    "./projects/ng-text-field/src/**/*.{html,ts}",
    
  ],
  theme : {
    extend: {
        animation: {
        progress: 'progress 1s infinite linear',
      },
      keyframes: {
        progress: {
          '0%': { transform: ' translateX(0) scaleX(0)' },
          '40%': { transform: 'translateX(0) scaleX(0.4)' },
          '100%': { transform: 'translateX(100%) scaleX(0.5)' },
        },
      },
      transformOrigin: {
        'left-right': '0% 50%',
      }
    }
},
  plugins: [],
}

