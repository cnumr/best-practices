/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          DEFAULT: 'hsl(var(--neutral) var(--neutral-saturation))',
          focus: 'hsl(var(--neutral) calc(var(--neutral-saturation) - 10%))',
          dark: 'hsl(var(--neutral) 0%)',
          light: 'hsla(var(--neutral) calc(var(--neutral-saturation) + 77% ))',
          transparent: 'hsla(var(--neutral) var(--neutral-saturation) / 0.1)',
          content: 'white',
        },
        primary: {
          DEFAULT: 'hsl(var(--green) var(--green-saturation))',
          focus: 'hsl(var(--green) calc(var(--green-saturation) - 5%))',
          dark: 'hsl(var(--green) calc(var(--green-saturation) - 10%))',
          light: 'hsla(var(--green) calc(var(--green-saturation) + 55% ))',
          transparent: 'hsla(var(--green) var(--green-saturation) / 0.1)',
          content: 'white',
        },
        accent: '#37CDBE',
        info: '#3ABFF8',
        success: '#36D399',
        warning: '#FBBD23',
        error: '#F87272',
        xiketic: '#171219',
      },
      fontFamily: {
        base: [
          'Red Hat Display',
          'Arial',
          'Helvetica',
          'Liberation Sans',
          'FreeSans',
          'sans-serif',
        ],
      },
      fontSize: {
        sm: ['var(--fs-sm)', { lineHeight: '1.5rem' }],
        base: ['var(--fs-base)', { lineHeight: '1.688rem' }],
        lg: ['var(--fs-lg)', { lineHeight: '1.8rem' }],
        xl: ['var(--fs-xl)', { lineHeight: '2.1rem' }],
        '2xl': ['var(--fs-2xl)', { lineHeight: 'var(--lh-2xl)' }],
        '3xl': ['var(--fs-3xl)', { lineHeight: '3.25rem' }],
        '4xl': ['var(--fs-4xl)', { lineHeight: 'var(--lh-4xl)' }],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
