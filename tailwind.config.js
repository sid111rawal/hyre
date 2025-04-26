/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#121212",
          },
          secondary: "#2F80ED",
          employer: {
            light: "#EDE9FE",
            DEFAULT: "#8B5CF6",
            dark: "#7C3AED",
            text: "#FFFFFF",
          },
          worker: {
            light: "#047857", // More saturated shade of green
            DEFAULT: "#065F46", // More saturated shade of green
            dark: "#044836", // More saturated shade of green
            text: "#FFFFFF",
          },
          accent: {
            DEFAULT: "#E40F7B",
          },
          "text-primary": {
            DEFAULT: "#F5F5F5",
          },
          "text-secondary": {
            DEFAULT: "#E0E0E0",
          },
          "background-primary": {
            DEFAULT: "#121212",
          },
          "background-secondary": "#1E1E1E",
        },



      },
    },
    plugins: [],
};