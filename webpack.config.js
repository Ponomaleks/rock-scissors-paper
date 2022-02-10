const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

const PATH_SOURCE = path.join(__dirname);
const PATH_DIST = path.join(__dirname, './dist');

module.exports = {
  context: path.resolve(__dirname),
  entry: [path.join(PATH_SOURCE, './js/index.js')],
  output: {
    path: PATH_DIST,
    filename: 'app.js',
    clean: true,
    environment: {
      arrowFunction: false,
    },
  },
  resolve: {
    extensions: ['.js', '.scss'],
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(wav|mp3)/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PATH_SOURCE, './index.html'),
    }),

    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),

    new PrettierPlugin({
      tabWidth: 4,
      extensions: ['.js'],
    }),

    new ESLintPlugin({
      extensions: ['js'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(PATH_SOURCE, 'images'),
          to: path.resolve(PATH_DIST, './images'),
        },
        {
          from: path.resolve(PATH_SOURCE, 'sound'),
          to: path.resolve(PATH_DIST, './sound'),
        },
      ],
    }),
    new ImageMinimizerPlugin({
      deleteOriginalAssets: true,
      loader: true,
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            'imagemin-gifsicle',
            'imagemin-mozjpeg',
            'imagemin-pngquant',
          ],
        },
      },
    }),
  ],
  devServer: {
    watchFiles: ['./*'],
    port: 8080,
  },
};
