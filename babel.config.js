module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "defaults",
        useBuiltIns: "usage",
        corejs: "3.38.0",
      },
    ],
  ],
};
