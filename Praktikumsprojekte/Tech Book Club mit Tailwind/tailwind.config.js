 /** @type {import('tailwindcss').Config} */
 export default {
   content: [
     "./src/**/*.{html,js,css}",
     "./src/index.html",
   ],
   theme: {
     extend: {
       fontFamily: {
         'inter-regular': ['Inter Regular', 'sans-serif'],
         'inter-bold': ['Inter Semi Bold', 'sans-serif'],
         'martian-mono-regular': ['Martian Mono Regular', 'sans-serif'],
         'martian-mono-semibold': ['Martian Mono Semi Bold', 'sans-serif'],
         'martian-mono-bold': ['Martian Mono Bold', 'sans-serif'],
       },
       fontWeight: {
         'normal': '700',
       },
       colors: {
         neutral: {
           '900': '#062630',
           '700': '#385159',
           '200': '#E6E1DF',
           '100': '#FAF5F3',
           DEFAULT: '#FFFFFF',
         },
         'light-salmon': {
           '500': '#FEA36F',
           '100': '#FFE2D1',
           '50': '#FFF5EF',
         },
       },
       fontSize: {
         'preset-1': ['3.875rem', {
           lineHeight: '1.2',
           letterSpacing: '-0.125rem',
         }],
         'preset-1-mobile': ['2.375rem', {
           lineHeight: '1.2',
           letterSpacing: '-0.125rem',
         }],
         'preset-2': ['3.125rem', {
           lineHeight: '1.3',
           letterSpacing: '-0.125rem',
         }],
         'preset-2-mobile': ['2.125rem', {
           lineHeight: '1.3',
           letterSpacing: '-0.125rem',
         }],
         'preset-3': ['2.125rem', {
           lineHeight: '1.3',
           letterSpacing: '-0.0625rem',
         }],
         'preset-3-mobile': ['1.5rem', {
           lineHeight: '1.1',
           letterSpacing: '-0.0625rem',
         }],
         'preset-4': ['1.5rem', {
           lineHeight: '1.1',
           letterSpacing: '-0.0625rem',
         }],
         'preset-5': ['1.25rem', {
           lineHeight: '1.4',
           letterSpacing: '-0.0313rem',
         }],
         'preset-6': ['1.125rem', {
           lineHeight: '1.3',
           letterSpacing: '-0.0625rem',
         }],
         'preset-6-mobile': ['1rem', {
           lineHeight: '1.3',
           letterSpacing: '-0.0625rem',
         }],
         'preset-7': ['0.875rem', {
           lineHeight: '1.2',
           letterSpacing: '-0.0625rem',
         }],
       },
       backgroundImage: {
         'pattern-light': "url('../assets/images/pattern-light-bg.svg')",
         'pattern-dark': "url('../assets/images/pattern-dark-bg.svg')",
       }
     },
   },
   plugins: [],
 }