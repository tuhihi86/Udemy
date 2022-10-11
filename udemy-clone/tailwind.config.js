/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        design:
          "url('https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg')",
        development:
          "url('https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg')",
        marketing:
          "url('https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg')",
        itandsoftware:
          "url('https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg')",
        personal:
          "url('https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg')",
        business:
          "url('https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg')",
        photography:
          "url('https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg')",
        music:
          "url('https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg')"
      },
      md: "891",
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
