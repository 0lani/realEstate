module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px'
    },
    fontFamily: {
      display: ['Roboto_Condensed', 'sans-serif'],
      body: ['Raleway', 'sans-serif'],
    },
    letterSpacing: {
      normal: '0.05em'
    },
    extend: {
      padding: theme => theme('spacing'),
      stroke: {
        current: 'currentColor',
      },
      backgroundImage: theme => ({
        'hero': "url('../images/intro-bg.png')",
      }),
      width: {
        '4w': '4vw',
        hrLine: '8vw',
        'hrLine-mobile': '17vw',
        '22': '22vw',
        description: '30vw'
      },
      height: {
        '1h': '1vh',
        hrLine: '2vh',
        fImg: '30vh',
        '50': '50vh',
        cImg: '67.5vh',
        super: '110vh',
        
      },
      margin: {
       '13': '3.5rem',
       '100': '20rem'
      },
      inset: {
        '0': '0',
        '5': '5%',
        '12': '12%',
        '24': '24%',
        '34': '34%',
        '45': '45%'
      },
      backgroundPosition: {
        'center-hero': '54% 13%',
        'mobile-center-hero': '51% 8%'
      },
      fontSize: {
        '1xlC': '1.3rem',
        '2xlC': '2rem',
        '2xlCM': '2.5rem',
        '3xlC': '4rem',
        '5xlC': '5rem'
      },
      borderWidth: {
        '19': '19px'
      },
    },
  }
};
