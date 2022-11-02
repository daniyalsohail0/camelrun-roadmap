npm install react-icons
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm i tailwind-scrollbar-hide

Go to tailwind.config.js and paste the following code:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

Next go to global.css and paste the following code:

@tailwind base;
@tailwind components;
@tailwind utilities;

P.S if there is any issue in tailwindcss kindly check the content and the naming convention used in the project.

Cheers!