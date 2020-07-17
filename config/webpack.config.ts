import { BannerPlugin, Configuration } from 'webpack'
import { resolve } from 'path'
import WebpackBar from 'webpackbar'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import SizePlugin from 'size-plugin'

import { PROJECT_NAME, PROJECT_ROOT } from '../constants/env'
import { tsWorkerPool } from '../constants/worker-pool'

const configuration: Configuration = {
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
          { loader: 'thread-loader', options: tsWorkerPool },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              happyPackMode: true,
              configFile: resolve(PROJECT_ROOT, 'tsconfig.json'),
              experimentalFileCaching: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new BannerPlugin({
      raw: true,
      banner: `/** @preserve Powered by ${PROJECT_NAME} (https://github.com/LaamGinghong/typescript-lib-template) */`,
    }),
    new FriendlyErrorsWebpackPlugin(),
    new SizePlugin({ writeFile: false }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        memoryLimit: 4096,
        configFile: resolve(PROJECT_ROOT, 'tsconfig.json'),
      },
    }),
    new CleanWebpackPlugin(),
    new HardSourceWebpackPlugin({ info: { mode: 'none', level: 'warn' } }),
  ],
}

export default configuration
