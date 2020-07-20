import webpack, { Stats } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { merge } from 'webpack-merge'

import configuration from './config/webpack.config'

const analysisConfiguration = merge(configuration, {
  plugins: [new BundleAnalyzerPlugin()],
})

webpack(analysisConfiguration).run((err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  const options: Stats.ToStringOptions = {
    colors: true,
    modules: true,
  }

  console.log(stats.toString(options))
})
