const redis = require('./redis')

const CACHE_KEY = 'job'

module.exports = async () => {
  const job = await redis.get(CACHE_KEY)
  return `Hi. (Last Job: ${job})`
}
