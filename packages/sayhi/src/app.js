const random = require('random')
const delay = require('delay')
const redis = require('./redis')
const { CACHE_KEY, DELAY_MAXIMUM } = require('./env')

module.exports = async () => {
  const job = await redis.get(CACHE_KEY)
  await delay(random.int(0, DELAY_MAXIMUM))
  return `Hi. (Last Job: ${job})`
}
