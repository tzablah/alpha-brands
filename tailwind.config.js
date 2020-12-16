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
        contactColor: 'rgba(231, 238, 249, 0.3)'
      },
      margin: {
        7: '1.75rem',
        14: '3.56rem',
        brandMargin: '15px',
        contactMargin: '30px',
        footerMargin: '75px',
        9: '2.25rem',
        17: '68px',
        1.5: '5.5px',
        11:'44px',
        3.5:'.875rem',
        nuestrasMarcas: '1.625rem'
      },
      height: {
        input: '52px',
        inputSm: '48px',
        inputMd: '44px',
        brandImage: '270px',
        brandProductSm: '90px',
        brandProdcutMd: '147px',
        brandProductLg: '220px',
        logoNav: '34.65px',
        logoNavMd: '38.91px',
        logoNavLg: '53.25px',
        contactSection: '765px',
        catalogInput: '52px',
        buttonBrandMobile: '60px',
        brandIcon: '104px',
<<<<<<< HEAD
        brandIconTablet:'203px',
        textAreaSm:'204px',
        textAreaMd:'144px',
        heroContainer:'60vh',
=======
        brandIconTablet: '203px',
        textAreaSm: '204px',
        textAreaMd: '144px',
        heroContainer: '60vh',
        brandIconMobV: '127px',
        brandIconTabletV: '160px'
>>>>>>> 9201e80a0dfd7abb5f94f7da09e73c23bda3de48
      },
      width: {
        brandImage: '270px',
        brandProductSm: '90px',
        brandProdcutMd: '147px',
        brandProductLg: '305px',
        modalMd: '95%',
        logoNav: '124px',
        logoNavMd: '141px',
        logoNavLg: '198px',
        desktopsize: '1170px',
        aboutSection: '970px',
        catalogInput: '571px',
        buttonBrandMobile: '334px',
        brandIcon: '104px',
        brandIconMobV: '127px',
        brandIconTabletV: '160px',
        brandIconTablet: '203px',
        inputSm: '334px',
        inputMd: '437px',
        inputLg: '570px',
        aboutSectionMd: '902px',
        72: '18rem'
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
        brandmd: "24px",
        catalog: "14.5px",
        brandlg: "32px",
        distributors: "26px",
      },
      letterSpacing: {
        catalog: ".06em",
        download: "0.145em",
        title: "0.045em;"
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
