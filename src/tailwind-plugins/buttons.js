module.exports = function ({ theme, addUtilities }) {
    addUtilities({
        '.btn': {
          background: "#F49725",
          cursor: 'pointer',
          color: 'white',
          fontFamily: theme ('fontFamily')['poppins'],
          '&:hover': {
            background:  "#EC8A13"
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
          '@media (max-width: 639px)': {
            width: '334px'
          },  
        },
        '.btn-sideBar': {
          width: '246px',
          height: '44px',
          'p': {
          fontSize: '14.5px',
          letterSpacing: '.06em'
          },
        },
        '.btn-modal': {
          width: '335px',
          height: '60px',
          'p': {
          fontSize: '16px',
          letterSpacing: '.145em',
          },
          '@media (min-width: 639px)': {
              width: '288px'
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