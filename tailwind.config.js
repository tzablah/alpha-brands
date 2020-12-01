module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    extend: {
      colors: {
        white: "#FEFEFD",
        blue: "#00538B",
        blueBright: "#3380CC",
        blueLight: "rgba(51,128,204,0.07)",
        orange: "#EC8A13",
        orangeLight: "#F49725",
        gray: "#F6F7F9",
        black: "rgba(0, 0, 0, 0.77)",
        content: "rgba(0, 0, 0, 0.65)",
        navgray: "rgba(0, 0, 0, 0.55)",
        input: "rgba(0, 0, 0, 0.50)",
        contact: "rgba(231, 238, 249, 0.3)"
      },
      height: {
        input: "52px",
        brandImage: "270px",
        brandProductSm: "104px",
        brandProdcutMd: "190px",
        brandProductLg: "235px",
        logoNav: "34.65px",
        logoNavMd: "38.91px",
        logoNavLg: "53.25px",
        contactSection: "765px",
        modalLg: "470px"
      },
      width: {
        brandImage: "264.47px",
        brandProductSm: "104px",
        brandProdcutMd: "125px",
        brandProductLg: "170px",
        modalMd: "95%",
        logoNav: "124px",
        logoNavMd: "141px",
        logoNavLg: "198px",
        desktopsize: "1170px",
        aboutSection: "970px",
        modalLg: "470px",
        infoBrandXl: "640px",
        infoBrandLg: "580px",
        '72': "18rem"
      },
      maxWidth: {
        contactSection: "1440px",
      },
      backgroundSize: {
        contactBackgroundSize: "105%",
      },
      backgroundPosition: {
        top: "-25px 70px",
        toplg: "-25px 0px",
        topxlg: "-25px 50px",
      },
      fontSize: {
        brandmd: "28px",
        catalog: "14.5px",
        brandlg: "32px",
        distributors: "26px"
      },
      letterSpacing: {
        catalog: ".06em",
        download: "0.145em"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif']
      },
      boxShadow: {
        main: "0px 0px 10px rgba(49, 74, 90, 0.16)",
        hov: "0px 0px 25px rgba(49, 74, 90, 0.16)"
      }
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"]
  },
  plugins: [],
};
