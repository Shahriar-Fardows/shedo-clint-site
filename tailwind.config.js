
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./index.html",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  plugins: [
    require("daisyui"),
    flowbite.plugin(),
  ],
};