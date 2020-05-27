const redis = require('./redis')
const { CACHE_KEY } = require('./env')

module.exports = async (request) => {
  const job = await redis.get(CACHE_KEY)
  return `Hi.\nCurrent Path: ${request.url}\nLast CronJob: ${job})`
}
