/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // или 'media', если хочешь авто по системе пользователя
  content: [
    "./index.html",
    "./src/*/.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}