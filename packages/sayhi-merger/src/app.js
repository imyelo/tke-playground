const url = require('url')
const random = require('random')
const delay = require('delay')
const got = require('got')
const pAll = require('p-all')
const { getIstioRequestHeaders } = require('./istio')
const { TARGETS, DELAY_MAXIMUM } = require('./env')

module.exports = async (request) => {
  await delay(random.int(0, DELAY_MAXIMUM))
  const headers = getIstioRequestHeaders(request)

  console.log(TARGETS)

  const responses = await pAll(TARGETS.map((target) => () => got(url.resolve(target, request.url), { headers })))

  return responses.map(({ body }) => body).join('\n')
}
