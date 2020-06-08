const delay = require('delay')
const redis = require('./redis')
const { CACHE_KEY, DELAY_MAXIMUM } = require('./env')

module.exports = async (request) => {
  await delay(random.int(0, DELAY_MAXIMUM))
  const job = await redis.get(CACHE_KEY)
  return `Hi.\nCurrent Path: ${request.url}\nLast CronJob: ${job})`
}
