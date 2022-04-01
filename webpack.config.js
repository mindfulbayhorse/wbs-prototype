const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    main: './src/js/index.js',
    vendor: ['bootstrap']
  },
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    static: './public',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
   optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
   },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Project work breakdown structure (empty)',
      filename: 'index.html',
      template: 'src/assets/templates/wbs.first.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Project work breakdown structure',
      filename: 'wbs.html',
      template: 'src/assets/templates/wbs.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Deliverable | Front-end realization',
      filename: 'deliverable.html',
      template: 'src/assets/templates/deliverable.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Edit deliverable | Front-end realization',
      filename: 'edit-deliverable.html',
      template: 'src/assets/templates/deliverable.edit.html'
    }),
     new BrowserSyncPlugin({
      server: {
          baseDir: "public",
          serveStaticOptions: {
              extensions: ["html"]
          }
      },
      host: 'wbs-prototype.com',
      https: true
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader', // Run postcss actions
            options: {
              postcssOptions: {
                plugins: function() {
                   // postcss plugins, can be exported to postcss.config.js
                  return [
                    require('autoprefixer')
                  ];
                }
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

                if (relativePath === 'src/sass') {
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
      },
    ],
  },
};