const typography = require('@tailwindcss/typography');
const rippleui = require('rippleui');
const tailanim = require('tailwindcss-animated')


module.exports = ({
  content: ['./src/**/*.{html,js,svelte,ts}'],
  rippleui: {
    defaultStyle: false,
  },
	theme: {
	  colors: {
      'base': '#FFFFFF',
      'elementary': '#6E44FF',
      'action': '#20C9A2',
      'building': '#565657',
      'error': '#D20F46',
    },
    fontFamily: {
      header: ['Delius Unicase', 'Serif'],
      general: ['Neucha', 'cursive'],
      highlight: ["Rock Salt"],
    },
    spacing: {
      px: '1px',
      0: '0',
      5: '1rem',
      10: '2.5rem',
      20: '3rem',
      25: '4.5rem',
      30: '6rem',
      60: '12rem',
      120: '24rem',
      vh: '100vh',
      vw: '100vw',
      page: '300vh'
    },
		extend: {
		}
	},

	plugins: [typography, rippleui, tailanim]
}); 

 
