/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#F3F4F6',
            DEFAULT: '#FFFFFF',
            dark: '#6B7280',
            darkmode: { // Dark mode variations
              light: '#333333',
              DEFAULT: '#F0F0F0',
              dark: '#A0A0A0',
            },
          },
          secondary: '#4F46E5',
          'secondary-dark': '#4338CA',
          'secondary-darkmode': { // Dark mode variation for secondary
            DEFAULT: '#6660D4',
            dark: '#5A54C8',
          },
          employer: {
            light: '#EDE9FE',
            DEFAULT: '#8B5CF6',
            dark: '#7C3AED',
            text: '#FFFFFF',
            darkmode: {
              light: '#3B2F5A',
              DEFAULT: '#A982E5',
              dark: '#9670D2',
              text: '#F0F0F0',
            },
          },
          worker: {
            light: '#D1FAE5',
            DEFAULT: '#10B981',
            dark: '#059669',
            text: '#FFFFFF',
            darkmode: {
              light: '#1A4738',
              DEFAULT: '#52C4A1',
              dark: '#43B08E',
              text: '#F0F0F0',
            },
          },
          accent: {
            yellow: '#F59E0B',
            'yellow-light': '#FEF3C7',
            'yellow-dark': '#B45309',
            teal: '#14B8A6',
            'teal-light': '#CCFBF1',
            'teal-dark': '#0F766E',
            orange: '#F97316',
            darkmode: { // Dark mode variations for accent colors
              yellow: '#EAB308',
              teal: '#2DD4BF',
              orange: '#F9A825',
            },
          },
          'text-primary': '#1F2937',
          'text-secondary': '#6B7280',
          'text-primary-darkmode': '#F0F0F0', // Dark mode variation for text colors
          'text-secondary-darkmode': '#A0A0A0',
        },
      },
    },
    plugins: [],
};