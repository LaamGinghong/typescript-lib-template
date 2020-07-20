import path from 'path'

const PROJECT_ROOT = path.resolve(__dirname, '../', '../')
const PROJECT_NAME = 'TypeScript Lib template'

const IS_DEV = process.env.NODE_ENV !== 'production'

export { PROJECT_ROOT, PROJECT_NAME, IS_DEV }
