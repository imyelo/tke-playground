const pick = require('just-pick')

// forked from https://github.com/TencentCloudContainerTeam/tcm-demo/blob/7f02cac/apps/mall/v2/router/index.js#L145
const HEADERS = [
  'cookie',
  'x-request-id',
  'x-b3-traceid',
  'x-b3-spanid',
  'x-b3-parentspanid',
  'x-b3-sampled',
  'x-b3-flags',
  'x-ot-span-context'
]

exports.getIstioRequestHeaders = (request) => pick(request.headers, HEADERS)
