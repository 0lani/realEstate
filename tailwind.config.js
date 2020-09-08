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
        hrLine: '8vw'
      },
      height: {
        hrLine: '2vh',
        fImg: '30vh',
        super: '110vh',
        
      },
      margin: {
       '13': '3.5rem',
       '100': '20rem'
      },
      inset: {
        '0': '0',
        '24': '24%',
        '34': '34%',
        '45': '45%'
      },
      backgroundPosition: {
        'center-hero': '54% 13%',
        'mobile-center-hero': '51% 8%'
      },
      fontSize: {
        '2xlC': '2rem',
        '2xlCM': '2.5rem',
        '3xlC': '4rem',
        '5xlC': '5rem'
      },
    },
  }
};
