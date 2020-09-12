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
        description: '30vw',
        '36': '36vw',
        '50': '50vw',
        '61': '61vw',
        '90': '90%'
      },
      maxWidth: {
        '60': '60%'
      },
      height: {
        '1h': '1vh',
        hrLine: '2vh',
        '20': '20vh',
        fImg: '30vh',
        '50': '50vh',
        '60': '60vh',
        cImg: '67.5vh',
        '90': '90vh',
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
        '31': '31%',
        '34': '34%',
        '45': '45%'
      },
      backgroundPosition: {
        'tablet-center-hero': '51% 13%;',
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
      textColor: {
        goldS: '#95950c'
      },
      borderWidth: {
        '19': '19px'
      },
    },
  }
};
