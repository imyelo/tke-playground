const redis = require('./redis')

const CACHE_KEY = 'job'

module.exports = async () => {
  await redis.set(CACHE_KEY, (new Date()).toUTCString())
}
