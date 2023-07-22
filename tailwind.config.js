/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors:{
      "primary": "rgb(65 217 159)",
                  
          "secondary": "#000000",
                  
          "accent": "#37CDBE",
                  
          "neutral": "#3D4451",
     }
    },
  },
  plugins: [require("daisyui")],
}
