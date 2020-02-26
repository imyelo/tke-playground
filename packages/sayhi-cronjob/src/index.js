const redis = require('./redis')

const CACHE_KEY = 'job'

const main = async () => {
  await redis.set(CACHE_KEY, (new Date()).toUTCString())
}

module.exports = main

if (!module.parent) {
  main()
}
