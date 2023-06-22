/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        108: '22rem',
        116: '28rem',
        128: '32rem',
        144: '36rem'
      },
      maxWidth: {
        '8xl': '1920px'
      },
      colors: {
        primary: 'var(--primary)',
        'primary-2': 'var(--primary-2)',
        secondary: 'var(--secondary)',
        hover: 'var(--hover)',
        'accent-0': 'var(--accent-0)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-4': 'var(--accent-4)',
        'accent-5': 'var(--accent-5)',
        'accent-6': 'var(--accent-6)',
        'accent-7': 'var(--accent-7)',
        'accent-8': 'var(--accent-8)',
        'accent-9': 'var(--accent-9)',
        magenta: 'var(--magenta)',
        pink: 'var(--pink)',
        yellow: 'var(--yellow)'
      },
      textColor: {
        base: 'var(--text-base)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)'
      },
      fontSize: {
        sm: ['14px', '22px'],
        base: ['16px', '22px'],
        lg: ['24px', '23px'],
        xl: ['32px', '39px']
      }
    }
  },
  plugins: []
};
