/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        "device-black": "#221e16",
        "device-green": "#5f645a",
        "device-lavanda": "#d4c7d9",
        "device-beige": "#f0eae0",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#0073c3",
        },
      },
    ],
  },
};
