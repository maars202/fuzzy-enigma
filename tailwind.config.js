module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        icon: ['Rubik Iso', 'sans-serif'],
        // title: ['Rufina', 'sans-serif'],
        pac: ['Pacifico', 'sans-serif'],
        
        
      },
      extend: {
        color: {
          "themegreen": "#01e472"
        },
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
          'main-bg': '#FAFBFB',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
          "q-primary":" #027be3",
          "q-secondary": "#26a69a",
          "q-accent": "#9c27b0",
          "q-positive": "#21ba45",
          "q-negative": "#c10015",
          "q-info": "#31ccec",
          "q-warning": "#f2c037",
          "q-dark": "#1d1d1d",
          "q-dark-page": "#141c33",
          "themegreen": "#01e472",
          "lightgrey": "#313536",
          "darkgrey": "#262829",
          "lightred": "#FF6464",
          "lightblue": "#EDF7FA"
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
        },
        minHeight: {
          590: '590px',
        },
        backgroundImage: {
          'hero-pattern':
            "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
        },
      },
    },
    plugins: [],
  };