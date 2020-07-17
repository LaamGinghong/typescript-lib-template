declare module 'speed-measure-webpack-plugin' {
  import { Configuration, Plugin } from 'webpack'

  interface SpeedMeasureWebpackPluginOptions {
    disable?: boolean
    outputFormat?: string | (() => string)
    outputTarget?: string | (() => string)
    pluginNames?: {
      [key: string]: any
    }
    granularLoaderData?: boolean
  }

  class SpeedMeasureWebpackPlugin extends Plugin {
    constructor(options?: SpeedMeasureWebpackPluginOptions)

    wrap(configuration: Configuration): Configuration
  }

  export = SpeedMeasureWebpackPlugin
}
