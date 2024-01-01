import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'cream':'#f5f2ff24',
        'glass':'rgba(235, 235, 237, 0.1)',
        'ice':'#f6f6f6',
        'bg_white':'#F5F2FF',
        'darken':'#f0b6ff57',
        'box':'rgba(254, 254, 255, 0.326)'
      },
      boxShadow:{
        '2xl':'0 8px 48px rgba(0, 0, 0, .12)',
        'sm':'0 4px 30px rgba(0, 0, 0, 0.1)',
        'card':'rgba(0, 0, 0, 0.052) 0px 4px 12px'
      },
       backdropBlur: {
        xs: '100px',
        xl: '200px',
        gl:'30px'
      },
    },
  },
  plugins: [],
}
export default config
