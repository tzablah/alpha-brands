module.exports = function ({ theme, addUtilities }) {
  addUtilities({
    ".image": {
      "@media (min-width: 1280px)": {
        width: "270px",
        height: "270px",
      },
      "@media (min-width:1024px) and (max-width: 1279px)": {
        width: "203px",
        height: "203px",
      },
      "@media (min-width:768px) and (max-width: 1023px)": {
        width: "160px",
        height: "160px",
      },
      "@media (min-width:640px) and (max-width:767px)": {
        width: "127px",
        height: "141px",
      },
      "@media (max-width:639px)": {
        width: "96px",
        height: "96px",
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
