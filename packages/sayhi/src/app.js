const random = require('random')
const delay = require('delay')
const redis = require('./redis')

const CACHE_KEY = 'job'
const DELAY_MAXIMUM = process.env.APP_DELAY_MAXIMUM || (2 * 1000)

module.exports = async () => {
  const job = await redis.get(CACHE_KEY)
  await delay(random.int(0, DELAY_MAXIMUM))
  return `Hi. (Last Job: ${job})`
}
