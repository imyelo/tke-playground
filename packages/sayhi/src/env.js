exports.REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1'
exports.REDIS_PORT = process.env.REDIS_PORT || 6379
exports.REDIS_PASSWORD = process.env.REDIS_PASSWORD || ''
exports.REDIS_DB = process.env.REDIS_DB || 0

exports.CACHE_KEY = process.env.APP_CACHE_KEY || 'job'
exports.DELAY_MAXIMUM = +process.env.APP_DELAY_MAXIMUM || (2 * 1000)
