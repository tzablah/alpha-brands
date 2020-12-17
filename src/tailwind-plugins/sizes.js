module.exports = function ({ theme, addUtilities }) {
  addUtilities({
    ".image": {
      "@media (min-width: 1280px)": {
        width: "270px",
        height: "270px",
      },
      "@media (min-width:768px) and (max-width: 1279px)": {
        width: "203px",
        height: "203px",
      },

      "@media (max-width:767px)": {
        width: "104px",
        height: "104px",
      },
      "@media (max-width:740px)": {
        width: "127px",
        height: "141px",
      },
    },
    ".circle": {
      "@media (min-width: 1280px)": {
        width: "355px",
        height: "375px",
      },

      "@media (min-width:768px) and (max-width: 1279px)": {
        width: "354px",
        height: "369px",
      },
      "@media (max-width:767px)": {
        width: "235px",
        height: "244px",
      },
    },
  });
};
