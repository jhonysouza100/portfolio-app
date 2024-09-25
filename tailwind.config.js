/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '425px',
      'md': '620px',
      'lg': '968px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      gridTemplateColumns: {
        'max2': 'repeat(2, max-content)',
        'max3': 'repeat(3, max-content)',
        'max4': 'repeat(4, max-content)',
        'a': 'repeat(2, 332px)',
        'b': "460px 340px",
        'c': "620px 1fr",
      },
      colors: {
        primary: 'var(--primary)',
        'primary-muted': 'var(--primary-muted)',
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
        'foreground-muted': 'var(--foreground-muted)',
        'foreground-light': 'var(--foreground-light)',
        'foreground-lighten': 'var(--foreground-lighten)',
        'container': 'var(--container)',
        "error": "rgb(196, 28, 28)",
        "error-soft": "rgb(252, 228, 228, .3)",
        "success": "rgb(31, 122, 31)",
        "success-soft": "rgba(227, 251, 227, .3)",
        "info": "rgb(11, 107, 203)",
        "info-soft": "rgb(227, 239, 251, .3)",
        "alert": "rgb(154, 91, 19)",
        "alert-soft": "rgb(253, 240, 225, .3)",
        "transparent": "hsla(0, 0%, 100%, .2)",
        "transparent-75": "hsla(0, 0%, 100%, .75)",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      lineHeight: {
        'extra-tight': '1.2',
        'extra-loose': '2.5',
      },
      keyframes: {
        ripples: {
          '0%': { width: '0', height: '0', opacity: '0.5' },
          '100%': { width: '500px', height: '500px', opacity: '0'},
        }
      },
      animation: {
        ripples: 'ripples 0.6s linear infinite',
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
