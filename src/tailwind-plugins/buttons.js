module.exports = function ({ theme, addUtilities }) {
  addUtilities({
    '.btn': {
      background: "#F49725",
      cursor: 'pointer',
      color: 'white',
      fontFamily: theme('fontFamily')['poppins'],
      '&:hover': {
        background: "#EC8A13"
      },
      '&:focus': {
        outline: 'none'
      },
    },
    '.btn-hero': {
      width: '288px',
      height: '60px',
      'p': {
        fontSize: '16px',
        letterSpacing: '.145em',
      },
      '@media (min-width: 360px) and (max-width: 639px)': {
        width: '100%'
      },
      '@media (max-width: 359px)': {
        width: '100%'
      },
    },
    '.btn-sideBar': {
      width: '100%',
      height: '44px',
      'p': {
        fontSize: '14.5px',
        letterSpacing: '.06em'
      },
    },
    '.btn-modal': {
      height: '60px',
      'p': {
        fontSize: '16px',
        letterSpacing: '.145em',
      },
      '@media (min-width: 640px)': {
        width: '335px'
      },
      '@media (min-width: 426px) and (max-width: 639px)': {
        width: '288px'
      },
      '@media (max-width: 425px)': {
        width: '100%'
      },
    },
    '.btn-navbar': {
      width: '157px',
      height: '44px',
      'p': {
        fontSize: '14.5px',
        letterSpacing: '.06em',
      },
      '@media (min-width: 639px) and (max-width: 1023px)': {
        width: '128px',
        height: '36px',
        'p': {
          fontSize: '12px',
        }
      }
    }
  });
};