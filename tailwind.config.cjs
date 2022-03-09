const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        /* https://tailwinwindshades.com used to generate shades */
        charcoal: {
          DEFAULT: '#1F1F11',
          50: '#969652',
          100: '#88884B',
          200: '#6E6E3C',
          300: '#54542E',
          400: '#39391F',
          500: '#1F1F11',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        berry: {
          DEFAULT: '#742C40',
          50: '#D1869B',
          100: '#CC788F',
          200: '#C05A76',
          300: '#AF4261',
          400: '#923750',
          500: '#742C40',
          600: '#4B1D2A',
          700: '#230D13',
          800: '#000000',
          900: '#000000',
        },
        caramel: {
          DEFAULT: '#A99A80',
          50: '#F3F1ED',
          100: '#EBE7E1',
          200: '#DAD4C9',
          300: '#CAC1B1',
          400: '#B9AD98',
          500: '#A99A80',
          600: '#907F61',
          700: '#6E614B',
          800: '#4D4434',
          900: '#2B261D',
        },
        vanilla: {
          DEFAULT: '#FBF6DF',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#FBF6DF',
          600: '#F5E8AD',
          700: '#EFDA7B',
          800: '#E8CC49',
          900: '#DEBB1C',
        },
      },
      height: {
        100: '26rem',
        120: '30rem',
        144: '36rem',
      },
      fontFamily: {
        anthologys: ['Anthology Sans'],
        anthologyo: ['anthology Outline'],
      },
      fontSize: {
        0: 0,
      },
      borderWidth: {
        8: '8rem',
        14: '14rem',
        15: '15rem',
        16: '16rem',
        24: '24rem',
        26: '26rem',
        28: '28rem',
        32: '32rem',
      },
    },
  },

  plugins: [],
};

module.exports = config;
