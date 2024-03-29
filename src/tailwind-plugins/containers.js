module.exports = function ({ theme, addUtilities }) {
  addUtilities({
    ".nav-container": {
      "@media (min-width: 1280px)": {
        height: "88px",
      },
      "@media (min-width: 1024px) and (max-width: 1279px)": {
        height: "76px",
      },
      "@media (max-width: 1023px)": {
        height: "60px",
      },
    },
    ".hero-container": {
      "@media (min-width: 1280px)": {
        height: "668px",
      },
      "@media (min-width: 768px) and (max-width: 1279px)": {
        height: "488px",
      },
      "@media (min-width: 426px) and (max-width: 767px)": {
        height: "100vh",
      },
      "@media (max-width: 425px)": {
        height: "332px",
      },
    },
    ".images-container": {
      "@media (min-width: 1280px)": {
        width: "530px",
      },
      "@media (min-width: 1024px) and (max-width: 1279px)": {
        width: "385px",
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
        width: "568px",
      },
      "@media (min-width: 640px) and (max-width: 767px)": {
        width: "570px",
      },
      "@media (max-width: 639px)": {
        width: "334px",
      },
    },
  });
};
