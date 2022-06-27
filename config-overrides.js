// const webpack = require("webpack")

// module.exports = function override(config, env) {
//     //do stuff with the webpack config...
//     config.resolve.fallback = {
//         ...config.resolve.fallback,
//         stream: require.resolve("stream-browserify"),
//         buffer: require.resolve("buffer"),
//     }
//     config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"]
//     config.plugins = [
//         ...config.plugins,
//         new webpack.ProvidePlugin({
//             process: "process/browser",
//             Buffer: ["buffer", "Buffer"],
//         }),
//     ]
//     // console.log(config.resolve)
//     // console.log(config.plugins)

//     return config
// }

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = function override(config, env) {
  config.resolve = {
    fallback: {
      stream: require.resolve('stream-browserify'),
    },
    // NOTE: I added this; missing in Substrate template and causes missing module errors;
    extensions: [...config.resolve.extensions, '.ts', '.js'],
  };
  config.plugins.push(new NodePolyfillPlugin());
  return config;
};
