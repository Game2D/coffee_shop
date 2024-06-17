/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sthin': ["Sora-Thin", "sans-serif"],
        'sextralight': ['Sora-ExtraLight', "sans-serif"],
        'slight': ['Sora-Light', "sans-serif"],
        'sregular': ['Sora-Regular', "sans-serif"],
        'smedium': ['Sora-Medium', "sans-serif"],
        'ssemibold': ['Sora-SemiBold', "sans-serif"],
        'sbold': ['Sora-Bold', "sans-serif"],
        'sextrabold': ['Sora-ExtraBold', "sans-serif"],
      },
      colors: {
        brown: {
          100: '#F9F2ED',
          200: '#EDD6C8',
          300: '#C67C4E',
        },
        black: '#313131', 
        gray: '#E3E3E3',
      }
    },
  },
  presets: [require("nativewind/preset")],
}

