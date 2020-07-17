declare module 'thread-loader' {
    export interface ThreadLoaderOptions {
        /* 产生 worker 的数量，默认是 cpu 的核心数 */
        workers?: number
        /* 一个 worker 进程中并行执行工作的数量，默认是 20 */
        workerParallelJobs?: number
        /* 额外的 node.js 参数 */
        workerNodeArgs?: string[]
        /**
         * 闲置时定时删除 worker 进程
         * 默认是 500 ms
         * 可以设置为无穷大，这样在监视模式时可以保持 worker 持续存在
         */
        poolTimeout?: number
        /**
         * 池分配给 worker 的工作数量
         * 默认为 200
         * 降低这个数只会降低总体的效率，但是会提升工作分布更均一
         */
        poolParallelJobs?: number
        /**
         * 工作池的名称
         * 可以修改名称来创建其余选项一样的池
         */
        name?: string
    }

    export class ThreadLoader {
        static warmup(options: ThreadLoaderOptions, loaders: string[]): void
    }
}
