import { merge } from 'webpack-merge';
import singleSpaAngularWebpack from 'single-spa-angular/lib/webpack';

module.exports = (webpackConfig: any, options: any) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(webpackConfig, options);



  // Customize Single-SPA-specific settings
  return merge(singleSpaWebpackConfig, {
    output: {
      libraryTarget: "system", // Use SystemJS module format
      filename: "main.js",
    },
  });
};