const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new WebpackPwaManifest({
        icons: [
          {
            src: '/assets/icons/icon_512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/assets/icons/icon_384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: '/assets/icons/icon_256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: '/assets/icons/icon_192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/assets/icons/icon_128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: '/assets/icons/icon_96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
        ],
        name: 'Just Another Text Editor',
        short_name: 'J.A.T.E',
        orientation: 'portrait',
        display: 'standalone',
        start_url: '/',
        description: 'Takes notes with JavaScript syntax highlighting!',
        background_color: '#225ca3',
        theme_color: '#225ca3',
      }),
      new InjectManifest({
        swSrc: './src/service-worker.js',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
