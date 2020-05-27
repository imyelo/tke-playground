const redis = require('./redis')
const { CACHE_KEY } = require('./env')

module.exports = async () => {
  const job = await redis.get(CACHE_KEY)
  return `Hi. (Last Job: ${job})`
}
