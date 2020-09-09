require('dotenv').config()
const path = require('path');
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// quickly decides node env then destructures into object
module.exports = ({ mode } = {
  mode: process.env.NODE_ENV === 'production' ?
    'production'
    :
    'development'
}) => {
  const isDevelopment = (mode === 'development');
  return {
    // sets mode for current env
    mode,
    // checks for entry for webapck
    entry: {
      main: path.join(__dirname, 'src', 'index.tsx'),
    },
    // output for bundled file
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.[hash].js'
    },
    devServer: isDevelopment ? {
      contentBase: path.resolve(__dirname, 'dist'),
      stats: {
        children: false
      },
      compress: true,
      hot: true,
      port: 3000
    } :
    null,
    devtool: isDevelopment ? 'source-map' : 'none',
    target: 'web',
    resolve: {
      alias: {
        Assets: path.resolve(__dirname, 'src', 'resources'),
        baseCss: path.resolve(__dirname, 'src', 'resources', 'css', 'index.css'),
        images: path.resolve(__dirname, 'src', 'resources', 'images'),
        icons: path.resolve(__dirname, 'src', 'resources', 'icons'),
        icons: path.resolve(__dirname, 'src', 'resources', 'icons'),
        Components: path.resolve(__dirname, 'src', 'Components'),
        NavBar: path.resolve(__dirname, 'src', 'Components', 'NavBar'),
        Hero: path.resolve(__dirname, 'src', 'Components', 'Hero'),
        Featured: path.resolve(__dirname, 'src', 'Components', 'Featured'),
      },
      extensions: ['.webpack.js', '.web.js','.js', '.json', '.ts', '.tsx', '.less']
    },
    // for code splitting
    optimization: isDevelopment ? {} : {
      namedModules: true,
      chunkIds: 'size',
      moduleIds: 'hashed',
      removeAvailableModules: true, 
      removeEmptyChunks: true,
      mergeDuplicateChunks: true,
      usedExports: true,
      minimize: true,
      minimizer: [new TerserWebpackPlugin({
         exclude: /node_modules/,
         extractComments: false,
         sourceMap: true,
         terserOptions: {
            output: {
               comments: true,
               beautify: true,
            },
            ecma: 6,
            warnings: false,
            parse: {},
            mangle: {
               eval: true, 
               // mangle options
               keep_classnames: false,
               keep_fnames: false,
               module: true,
               toplevel: true,
               safari10: false,
            },
            nameCache: null,
            ie8: false,
         }
      })]},
    module: {
      rules: [
        {
          // for loading js and react modules 
          test: /\.jsx?$/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules', 'react-spring')
          ],
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  'targets': {
                    'node': '12'
                  }
                }], '@babel/preset-react'
              ],
              cacheDirectory: true,
              cacheCompression: false
            }
          }]
        },
        // for loading typescript
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules|\.d\.ts$/
        },
        {
          test: /\.d\.ts$/,
          loader: 'ignore-loader'
        },
        {
          // for loading html files
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true }
            }
          ]

        },
        {
          // for loading css files
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader', 'postcss-loader',
            ],
        },
        // for loading/compressing images(png only)
        {
          test: /\.png$/,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                name: 'images/[name].[ext]',
                optipng: {
                  enabled: true,
                },
                pngquant: {
                  quality: [0.65, 0.90],
                  speed: 4
                }
              }
            },
          ],
        },
        // for loading fonts(ttf only)
        {
          test: /\.ttf$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]'
              }
            }
          ]
        },
      ]
    },
    plugins: [
      // to keep dist folder clean on rebuild
      new CleanWebpackPlugin(),
      // for html files
      new HtmlWebpackPlugin({
        inject: true,
        hash: true,
        template: path.resolve(__dirname, 'public', 'index.html'),
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        }
      }),
      // CSS file to watch and rebuild on every change.
      new MiniCssExtractPlugin({
        filename: 'styles.css',
        chunkFilename: '[name].[hash].css'
      }),
      // reduces css duplication in bundle
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default',
            {
              discardComments:
              {
                removeAll: true
              }
            }],
        },
        canPrint: true
      }),
      // to create manifest.json on build
      new WebpackManifestPlugin(),
      // took keep state on reload in dev server 
      new webpack.HotModuleReplacementPlugin(),
      // for hashing
      new WebpackMd5Hash()
    ]
  };
};
