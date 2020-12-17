module.exports = function ({ theme, addUtilities }) {
  addUtilities({
    '.input-size': {
      '@media (min-width: 1280px)': {
        height: '52px',
        width: '571px'
      },
      '@media (min-width: 768px) and (max-width: 1279px)': {
        height: '44px',
        width: '437px'
      },
      '@media (min-width: 640px) and (max-width: 767px)': {
        width: '570px',
        height: '48px'
      },
      '@media (min-width: 360px) and (max-width: 639px)': {
        width: '334px',
        height: '48px'
      },
      '@media (max-width: 359px)': {
        width: '100%',
        height: '48px'
      }
    },
    '.textarea': {
      '@media (min-width: 1280px)': {
        height: '129px',
        width: '571px'
      },
      '@media (min-width: 768px) and (max-width: 1279px)': {
        height: '144px',
        width: '437px'
      },
      '@media (min-width: 640px) and (max-width: 767px)': {
        width: '570px',
        height: '124px'
      },
      '@media (min-width: 360px) and (max-width: 639px)': {
        width: '334px',
        height: '204px'
      },
      '@media (max-width: 359px)': {
        width: '100%',
        height: '204px'
      }
    },
  });
};