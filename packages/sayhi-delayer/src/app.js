const url = require('url')
const random = require('random')
const delay = require('delay')
const got = require('got')
const { getIstioRequestHeaders } = require('./istio')
const { TARGET, DELAY_MAXIMUM } = require('./env')

module.exports = async (request) => {
  await delay(random.int(0, DELAY_MAXIMUM))
  const headers = getIstioRequestHeaders(request)
  const response = await got(url.resolve(TARGET, request.url), { headers })
  return response.body
}
