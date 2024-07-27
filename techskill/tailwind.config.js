/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'cbn': "url('assets/images/chandrababu.png')",
        'pk': "url('assets/images/pk1.png')",
        'lokesh': "url('assets/images/lokesh.png')",
        'apssdc': "url('assets/images/apssdc.png')",
        'apgov': "url('assets/images/apgov.png')",
        'srinivas': "url('assets/images/srinivas.png')",
        'future':  "url('assets/images/futuretech.png')",
        'mandals':  "url('assets/images/futuretown2.png')",
        'technologies':  "url('assets/images/technologies.png')",
        'bg1': "url('assets/images/slides/first.png')",
        'bg2': "url('assets/images/slides/second.png')",
        'bg3': "url('assets/images/bg3.png')",
        'bg4': "url('assets/images/bg4.png')",
        'ap': "url('assets/images/ap.png')",
        'bg7': "url('assets/images/bg5.png')",
        'bg9': "url('assets/images/bg9.png')",
        'bg10': "url('assets/images/bg10.webp')",
        'bg11': "url('assets/images/bg11.png')",
      },
      clipPath: {
        'rect': 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)',
        'rect-left': 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
      }
    },
    screens: {
      'small': {'min': '350px'},
      'mobile': {'min': '350px', 'max': '640px'},
      'tablet': {'min': '640px', 'max': '1024px'},
      'laptop': {'min': '1024px', 'max': '1280px'},
      'desktop': '1280px',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-rect': {
          'clip-path': 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)',
        },
        '.clip-rect-left': {
          'clip-path': 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
        },
      })
    },
    function({ addUtilities }) {
      addUtilities({
        '.list-checkmark': {
          'list-style-image': 'url("assets/icons/next.png")',
        },
      });
    },
  ]
}

