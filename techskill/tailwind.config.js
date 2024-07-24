/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('assets/images/bg1.png')",
        'bg2': "url('assets/images/bg2.png')",
        'bg3': "url('assets/images/bg3.png')",
        'bg4': "url('assets/images/bg4.png')",
        'cbn': "url('assets/images/chandrababu.png')",
        'lokesh': "url('assets/images/lokesh.png')",
        'apssdc': "url('assets/images/apssdc.png')",
        'apgov': "url('assets/images/apgov.png')",
        'srinivas': "url('assets/images/srinivas.png')",
        'ap': "url('assets/images/ap.png')",
        'bg7': "url('assets/images/bg5.png')",
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
  plugins: [],
}

