/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'jakarta': ['PlusJakartaSans-Regular'],
        'jakarta-bold': ['PlusJakartaSans-Bold'],
        'jakarta-bold-italic': ['PlusJakartaSans-BoldItalic'],
        'jakarta-extrabold': ['PlusJakartaSans-ExtraBold'],
        'jakarta-extrabold-italic': ['PlusJakartaSans-ExtraBoldItalic'],
        'jakarta-extralight': ['PlusJakartaSans-ExtraLight'],
        'jakarta-extralight-italic': ['PlusJakartaSans-ExtraLightItalic'],
        'jakarta-italic': ['PlusJakartaSans-Italic'],
        'jakarta-light': ['PlusJakartaSans-Light'],
        'jakarta-light-italic': ['PlusJakartaSans-LightItalic'],
        'jakarta-medium': ['PlusJakartaSans-Medium'],
        'jakarta-medium-italic': ['PlusJakartaSans-MediumItalic'],
        'jakarta-semibold': ['PlusJakartaSans-SemiBold'],
        'jakarta-semibold-italic': ['PlusJakartaSans-SemiBoldItalic'],
      },
    },
  },
  plugins: [],
};
