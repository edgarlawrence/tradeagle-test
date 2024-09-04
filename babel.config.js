module.exports = function(api) {
  api.cache(false);
  return {
    presets: [
      ['babel-preset-expo', {
        // Configuration options for the babel-preset-expo
      }],
    ],
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
        verbose: false,
      }],
    ],
  };
};
