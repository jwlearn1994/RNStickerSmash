module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          alias: {
            "components": "./src/components",
            "containers": "./src/containers",
            "hooks": "./src/hooks",
            "lib": "./src/lib",
            "assets": "./src/assets",
          }
        }
      ]
    ],
  };
};
