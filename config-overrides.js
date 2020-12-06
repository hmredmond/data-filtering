/* config-overrides.js */

const rewirePostCss = require('react-app-rewire-postcss');

module.exports = function override(config, env) {
  config = rewirePostCss(config, env);
  let loaderList = config.module.rules[1].oneOf;
  loaderList.splice(loaderList.length - 1, 0, {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  });

  return config;
};
