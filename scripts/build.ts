import webpack, { Stats } from 'webpack'

import configuration from './config/webpack.config'

webpack(configuration).run((err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  const options: Stats.ToStringOptions = {
    colors: true,
  }

  console.log(stats.toString(options))
})
