const random = require('random')
const delay = require('delay')
const got = require('got')

const TARGET = process.env.APP_TARGET || 'http://sayhi/'
const DELAY_MAXIMUM = process.env.APP_DELAY_MAXIMUM || (2 * 1000)

module.exports = async () => {
  await delay(random.int(0, DELAY_MAXIMUM))
  const response = await got(TARGET)
  return response.body
}
