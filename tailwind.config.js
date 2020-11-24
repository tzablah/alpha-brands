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
        blue2: "#3380CC",
        orange1: "#F49725",
        orange2: "#EC8A13",
        gray: "#F6F7F9",
        title: "rgba(0, 0, 0, 0.77)",
        content: "rgba(0, 0, 0, 0.65)",
        lightBlue: "rgba(51,128,204,0.07)",
        navgray: "rgba(0, 0, 0, 0.55)",
        input: "rgba(0, 0, 0, 0.50)"
      },
      height: {
        input: '52px',
        brandProductSm: '90px',
        brandProdcutMd: '147px',
        brandProductLg: '150px',
        logoNav: '34.65px',
        logoNavMd: '38.91px',
        logoNavLg: '53.25px'
      },
      width: {
        brandImage: '270px',
        brandProductSm: '90px',
        brandProdcutMd: '147px',
        brandProductLg: '150px',
        modalMd: '95%',
        logoNav: '124px',
        logoNavMd: '141px',
        logoNavLg: '198px'
      },
      backgroundSize: {
        contactBackground: '105%'
      },
      backgroundPosition: {
        top: '-25px 70px',
        topxlg: '-25px 50px'
      },

      fontSize: {
        brand: '26px'
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};
