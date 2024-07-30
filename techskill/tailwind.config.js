/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'ap': "url('assets/images/ap.png')",
        'cbn': "url('assets/images/chandrababu.png')",
        'pk': "url('assets/images/pk4.png')",
        'lokesh': "url('assets/images/lokesh.png')",
        'apssdc': "url('assets/images/apssdc.png')",
        'apgov': "url('assets/images/apgov.png')",
        'srinivas': "url('assets/images/srinivas.png')",
        'future':  "url('assets/images/futuretech.png')",
        'mandals':  "url('assets/images/futuretown2.png')",
        'technologies':  "url('assets/images/technologies.png')",
        'thankyou':  "url('assets/images/thankyou.png')",
        'bg1': "url('assets/images/slides/first.png')",
        'bg2': "url('assets/images/slides/second.png')",
        'bg3': "url('assets/images/bg3.png')",
        'bg4': "url('assets/images/bg4.png')",
        'bg7': "url('assets/images/bg5.png')",
        'bg9': "url('assets/images/bg9.png')",
        'bg10': "url('assets/images/bg10.webp')",
        'bg11': "url('assets/images/bg11.png')",
      },
      screens: {
        // Mobile Devices
        'small-phone': {'min': '320px', 'max': '360px'},
        'medium-phone': {'min': '361px', 'max': '414px'},
        'large-phone': {'min': '415px', 'max': '480px'},
  
        // Tablets
        'small-tablet': {'min': '481px', 'max': '768px'},
        'large-tablet': {'min': '769px', 'max': '1024px'},
  
        // Laptops
        'small-laptop': {'min': '1025px', 'max': '1280px'},
        'medium-laptop': {'min': '1281px', 'max': '1440px'},
        'large-laptop': {'min': '1441px', 'max': '1920px'},
  
        // Desktops
        'standard-desktop': {'min': '1921px', 'max': '2560px'},
        'large-desktop': {'min': '2561px', 'max': '3840px'},
  
        // Ultra-Wide and 4K/5K Monitors
        'ultra-wide': {'min': '3841px', 'max': '5120px'},
        '5k-monitor': {'min': '5121px'},
      },
      clipPath: {
        'rect': 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)',
        'rect-left': 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
      }
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

    // screens: {
    //   'small': {'min': '320px'},
    //   'mobile': {'min': '350px', 'max': '640px'},
    //   'tablet': {'min': '640px', 'max': '1025px'},
    //   'laptop': {'min': '1025px', 'max': '1280px'},
    //   'desktop': '1280px',
    // },