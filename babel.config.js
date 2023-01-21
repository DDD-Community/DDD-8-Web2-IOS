module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
        },
      ],
      [
        "module-resolver",
        {
          alias: {
            "~components": "./src/components",
            "~assets": "./assets",
            "~screens": "./src/screens",
            "~constants": "./src/constants",
            "~navigators": "./src/navigators",
            "~stores": "./src/stores",
            "~utils": "./src/utils",
            "~types": "./src/types",
            "~api": "./src/api",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
