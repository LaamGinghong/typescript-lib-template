import { ThreadLoader, ThreadLoaderOptions } from 'thread-loader'

const tsWorkerPool: ThreadLoaderOptions = {
    poolTimeout: 2000,
}

ThreadLoader.warmup(tsWorkerPool, ['ts-loader'])
console.log('warmup')

export { tsWorkerPool }
