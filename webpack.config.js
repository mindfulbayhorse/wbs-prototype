const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleaningOldFiles = require("./src/js/cleaning-cached-files");

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/index.js',
    vendor: ['bootstrap']
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'public'),
  },
  optimization: {
    minimize: true,
    moduleIds: 'deterministic',
  },
  plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[id].css',
      }),
      new CleaningOldFiles()
      ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader', // Run postcss actions
            options: {
              plugins: function() { // postcss plugins, can be exported to postcss.config.js
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: (loaderContext) => {
                const { resourcePath, rootContext } = loaderContext;
                const relativePath = path.relative(rootContext, resourcePath);

                if (relativePath === 'src/sass/input.sass') {
                  return {
                    indentWidth: 2,
                    includePaths: ['./src/sass/input.sass'],
                  };
                }

                return {
                  includePaths: ['./src/scss/input.scss'],
                };
              },
            },

          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ],
  },
};