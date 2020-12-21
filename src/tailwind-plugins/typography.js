module.exports = function ({ theme, addUtilities }) {
  addUtilities({
    ".header": {
      fontFamily: theme("fontFamily")["poppins"],
      fontStyle: "normal",
      letterSpacing: "0.1em",
      "@media (min-width: 1280px)": {
        fontSize: "32px",
        lineHeight: "48px",
      },
      "@media (min-width: 768px) and (max-width: 1279px)": {
        fontSize: "28px",
        lineHeight: "42px",
      },
      "@media (min-width: 360px) and (max-width: 767px)": {
        fontSize: "24px",
        lineHeight: "36px",
      },
      "@media (max-width: 359px)": {
        fontSize: "22px",
        lineHeight: "36px",
      },
    },
    ".subheader": {
      fontFamily: theme("fontFamily")["poppins"],
      fontStyle: "normal",
      fontWeight: "700",
      color: theme("colors")["black"],
      "@media (min-width: 1280px)": {
        fontSize: "26px",
        lineHeight: "39px",
        letterSpacing: "0.045em",
      },
      "@media (min-width: 768px) and (max-width: 1279px)": {
        fontSize: "24px",
        lineHeight: "33px",
        letterSpacing: "0.045em",
      },
      "@media (max-width: 767px)": {
        fontSize: "20px",
        lineHeight: "27px",
        letterSpacing: "0.03em",
      },
    },
    ".send": {
      fontWeight: "700",
      fontFamily: theme("fontFamily")["poppins"],
      fontStyle: "normal",
      "@media (min-width: 1280px)": {
        fontSize: "26px",
        lineHeight: "39px",
        letterSpacing: "0.045em",
      },
      "@media (min-width: 768px) and (max-width: 1279px)": {
        fontSize: "24px",
        lineHeight: "32.68px",
        letterSpacing: "0.045em",
      },
      "@media (max-width: 767px)": {
        fontSize: "20px",
        lineHeight: "27.24px",
        letterSpacing: "0.03em",
      },
    },
    ".nav-text": {
      color: theme("colors")["navgray"],
      textTransform: "uppercase",
      fontWeight: "400",
      fontFamily: theme("fontFamily")["poppins"],
      fontStyle: "normal",
      "@media (min-width: 1280px)": {
        fontSize: "14px",
        lineHeight: "21px",
        letterSpacing: "0.145em",
      },
      "@media (min-width: 1024px) and (max-width: 1279px)": {
        fontSize: "12px",
        lineHeight: "18px",
        letterSpacing: "0.145em",
      },
      "@media (max-width: 1023px)": {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.1em",
        "&:focus": {
          backgroundColor: theme("colors")["blueLight"],
          color: theme("colors")["blue"],
        },
        "&:active": {
          backgroundColor: theme("colors")["blueLight"],
          color: theme("colors")["blue"],
        },
      },
    },
    ".parragraph": {
      fontWeight: "400",
      fontFamily: theme("fontFamily")["opensans"],
      fontStyle: "normal",
      color: theme("colors")["content"],
      "@media (min-width: 1280px)": {
        fontSize: "20px",
        lineHeight: "32px",
      },
      "@media (min-width: 768px) and (max-width: 1279px)": {
        fontSize: "17px",
        lineHeight: "28px",
      },
      "@media (max-width: 767px)": {
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
    ".secondary-text": {
      fontFamily: theme("fontFamily")["opensans"],
      fontStyle: "normal",
      color: theme("colors")["content"],
      "@media (min-width: 1280px)": {
        fontSize: "15px",
        lineHeight: "24px",
      },
      "@media (min-width: 768px) and (max-width: 1279px)": {
        fontSize: "14px",
        lineHeight: "20px",
      },
      "@media (max-width: 767px)": {
        fontSize: "14px",
        lineHeight: "24px",
      },
    },
    ".anchor-text": {
      fontFamily: theme("fontFamily")["opensans"],
      fontStyle: "normal",
      color: theme("colors")["blueBright"],
      "&:hover": {
        color: theme("colors")["blue"],
      },
      "@media (min-width: 768px)": {
        fontSize: "16px",
        lineHeight: "22px",
      },
      "@media (max-width: 767px)": {
        fontSize: "14px",
        lineHeight: "19px",
      },
    },
  });
};
