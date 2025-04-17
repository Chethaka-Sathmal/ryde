/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["PlusJakartaSans-Regular"],
        "jakarta-bold": ["PlusJakartaSans-Bold"],
        "jakarta-bold-italic": ["PlusJakartaSans-BoldItalic"],
        "jakarta-extrabold": ["PlusJakartaSans-ExtraBold"],
        "jakarta-extrabold-italic": ["PlusJakartaSans-ExtraBoldItalic"],
        "jakarta-extralight": ["PlusJakartaSans-ExtraLight"],
        "jakarta-extralight-italic": ["PlusJakartaSans-ExtraLightItalic"],
        "jakarta-italic": ["PlusJakartaSans-Italic"],
        "jakarta-light": ["PlusJakartaSans-Light"],
        "jakarta-light-italic": ["PlusJakartaSans-LightItalic"],
        "jakarta-medium": ["PlusJakartaSans-Medium"],
        "jakarta-medium-italic": ["PlusJakartaSans-MediumItalic"],
        "jakarta-semibold": ["PlusJakartaSans-SemiBold"],
        "jakarta-semibold-italic": ["PlusJakartaSans-SemiBoldItalic"],
      },
      fontSize: {
        'xs': ['2.775vw', { lineHeight: '3.7vw' }],     // font: 3.7vw * 12/16, line: 3.7vw * 16/16
        'sm': ['3.2375vw', { lineHeight: '4.625vw' }],  // font: 3.7vw * 14/16, line: 3.7vw * 20/16
        'base': ['3.7vw', { lineHeight: '5.55vw' }],    // font: 3.7vw * 16/16, line: 3.7vw * 24/16
        'lg': ['4.1625vw', { lineHeight: '6.475vw' }],  // font: 3.7vw * 18/16, line: 3.7vw * 28/16
        'xl': ['4.625vw', { lineHeight: '6.475vw' }],   // font: 3.7vw * 20/16, line: 3.7vw * 28/16
        '2xl': ['5.55vw', { lineHeight: '7.4vw' }],     // font: 3.7vw * 24/16, line: 3.7vw * 32/16
        '3xl': ['6.9375vw', { lineHeight: '8.325vw' }], // font: 3.7vw * 30/16, line: 3.7vw * 36/16
        '4xl': ['8.325vw', { lineHeight: '9.25vw' }],   // font: 3.7vw * 36/16, line: 3.7vw * 40/16
        '5xl': ['11.1vw', { lineHeight: '11.1vw' }],    // font: 3.7vw * 48/16, line: 3.7vw * 48/16
        '6xl': ['13.875vw', { lineHeight: '13.875vw' }],// font: 3.7vw * 60/16, line: 3.7vw * 60/16
        '7xl': ['16.65vw', { lineHeight: '16.65vw' }],  // font: 3.7vw * 72/16, line: 3.7vw * 72/16
        '8xl': ['22.2vw', { lineHeight: '22.2vw' }],    // font: 3.7vw * 96/16, line: 3.7vw * 96/16
        '9xl': ['29.6vw', { lineHeight: '29.6vw' }],    // font: 3.7vw * 128/16, line: 3.7vw * 128/16
      },
      colors: {
        primary: {
          100: "#F5F8FF",
          200: "#EBF4FF",
          300: "#C3D9FF",
          400: "#9BBFFF",
          500: "#0286FF",
          600: "#6A85E6",
          700: "#475A99",
          800: "#364573",
          900: "#242B4D",
        },
        secondary: {
          100: "#F8F8F8",
          200: "#F1F1F1",
          300: "#D9D9D9",
          400: "#C2C2C2",
          500: "#AAAAAA",
          600: "#999999",
          700: "#666666",
          800: "#4D4D4D",
          900: "#333333",
        },
        success: {
          100: "#F0FFF4",
          200: "#C6F6D5",
          300: "#9AE6B4",
          400: "#68D391",
          500: "#38A169",
          600: "#2F855A",
          700: "#276749",
          800: "#22543D",
          900: "#1C4532",
        },
        danger: {
          100: "#FFF5F5",
          200: "#FED7D7",
          300: "#FEB2B2",
          400: "#FC8181",
          500: "#F56565",
          600: "#E53E3E",
          700: "#C53030",
          800: "#9B2C2C",
          900: "#742A2A",
        },
        warning: {
          100: "#FFFBEB",
          200: "#FEF3C7",
          300: "#FDE68A",
          400: "#FACC15",
          500: "#EAB308",
          600: "#CA8A04",
          700: "#A16207",
          800: "#854D0E",
          900: "#713F12",
        },
        general: {
          100: "#CED1DD",
          200: "#858585",
          300: "#EEEEEE",
          400: "#0CC25F",
          500: "#F6F8FA",
          600: "#E6F3FF",
          700: "#EBEBEB",
          800: "#ADADAD",
        },
      },
    },
  },
  plugins: [],
};
