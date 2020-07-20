import SpeedMeasureWebpackPlugin from 'speed-measure-webpack-plugin'

import configuration from './webpack.config'

const smp = new SpeedMeasureWebpackPlugin()

export default smp.wrap(configuration)
