module.exports = {
  twin: {
    config: "./tailwind.config.js",
    format: "auto",
    debugProp: true,
    debugPlugins: false,
    debug: false,
  },
  plugins: ["macros"],
  styleComponents: {
    pure: true,
  },
};
