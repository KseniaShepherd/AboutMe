import type { Config } from 'tailwindcss'
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: 
    {fontSize: 
      {
      '7xl': '5rem',
      '8xl': '6rem'
    },
  },
  },
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },  fontFamily: {
    'sans': ['Bodoni Moda', 'system-ui',],
  },
  
  plugins: [],
} satisfies Config
