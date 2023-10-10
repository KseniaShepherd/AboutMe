import type { Config } from 'tailwindcss'
export default {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
  
      // Or if using `src` directory:
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      container: {
        padding: {
          DEFAULT: '15px',
        },
      },
      screens: {
       xs: '390px',
        sm: '475px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
      extend: {
        colors: {
          primary: '#131424',
          secondary: '#393A47',
          accent: '#F13024',
        },
        animation: {
          'spin-slow': 'spin 6s linear infinite',
        },
        fontFamily: {
          bodoni: [`var(--font-BodoniModa)`, 'sans-serif'],
        },
      },
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    plugins: [],
  };