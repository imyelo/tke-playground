const redis = require('./redis')
const { CACHE_KEY } = require('./env')

const main = async () => {
  await redis.set(CACHE_KEY, (new Date()).toUTCString())
  await redis.quit()
}

module.exports = main

if (!module.parent) {
  main()
}
