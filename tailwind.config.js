/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{html,jsx,}",
  ],
  theme: {

    extend: {
      colors: {
        'headerHoverColor': '#fc8019',
        'sortByBtnColor': '#686b78',
        'sortByBtnHoverColor': '#3D4152',
        'ttlRestroHeading': '#282c3f',
        'cardHover': '#3a3c41',
        'locationError': '#93959f',
        "selectedBgColor": "#3e4152",
        "selectedBorderColor": "#1B1E24",
        "lightColor": "#535665",
        "restroCardBorder":"#e9e9eb",
        "darkOrange":"#e46d47",
        "lightGray":"#f1f1f6",
        "shimmerColor":"#eef0f5",
        "lightShimmer":"#f5f6f8"
      },
        keyframes:{
        rightSlash:{
          '0%':{left:'1px'},
          '100%':{left:'16px'},
        },
        fadeIn:{
          '0%':{opacity:'0'},
          '100%':{opacity:'1.0'},
        }
      },
      height:{
        'fourteenpx':"14px",
        'sevenpx':"7px",
        'tenpx':'10px'
      },
      width:{
        'fourteenpx':"14px",
        'sevenpx':"7px",
        
        'tenpx':'10px'

      }
    },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl'
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr'
        }
      }
      addUtilities(newUtilities)
    }),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        },
      })
    }),
  ],
}
