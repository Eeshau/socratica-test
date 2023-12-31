/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        backgroundColor: {
          'primary': '#FBF8EF',
        },
        colors: {
          'cool-grey': '#CFCCC4',
        },
        fontFamily: {
          'tiempos-headline': ['Tiempos Headline', 'serif'],
          'glyphworld': ['GlyphWorld']
        },
      }
    },
    plugins: []
  };