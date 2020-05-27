const random = require('random')
const delay = require('delay')
const got = require('got')
const { getIstioRequestHeaders } = require('./istio')

const TARGET = process.env.APP_TARGET || 'http://sayhi/'
const DELAY_MAXIMUM = process.env.APP_DELAY_MAXIMUM || (2 * 1000)

module.exports = async (request) => {
  await delay(random.int(0, DELAY_MAXIMUM))
  const headers = getIstioRequestHeaders(request)
  const response = await got(TARGET, { headers })
  return response.body
}
