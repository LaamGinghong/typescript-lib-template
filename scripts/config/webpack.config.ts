import { BannerPlugin, Configuration } from 'webpack'
import { resolve } from 'path'
import WebpackBar from 'webpackbar'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import SizePlugin from 'size-plugin'
import TerserPlugin from 'terser-webpack-plugin'

import { PROJECT_NAME, PROJECT_ROOT } from '../constants/env'

const configuration: Configuration = {
  devtool: 'source-map',
  mode: 'production',
  entry: resolve(PROJECT_ROOT, 'src', 'index.ts'),
  context: resolve(PROJECT_ROOT),
  output: {
    libraryTarget: 'umd',
    filename: 'index.js',
    path: resolve(PROJECT_ROOT, 'lib'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: resolve(PROJECT_ROOT, 'tsconfig.json'),
              experimentalFileCaching: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackBar({ name: 'typescript-lib-template', color: '#c3002f' }),
    new BannerPlugin({
      raw: true,
      banner: `/** @preserve Powered by ${PROJECT_NAME} (https://github.com/LaamGinghong/typescript-lib-template) */`,
    }),
    new FriendlyErrorsWebpackPlugin(),
    new SizePlugin({ writeFile: false }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
}

export default configuration
