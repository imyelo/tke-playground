const url = require('url')
const got = require('got')
const random = require('random')
const { nanoid } = require('nanoid/async')
const logger = require('./logger')
const { SAYHI_ENDPOINT } = require('./env')

const AVAILABLE_PATHS = [
  '/',
  '/foo',
  '/bar?qux=baz&quux',
]

const job = async () => {
  try {
    const id = await nanoid()
    logger.info({ id })
    const path = AVAILABLE_PATHS[random.int(0, AVAILABLE_PATHS.length - 1)]
    const response = await got(url.resolve(SAYHI_ENDPOINT, path))
    logger.info({ id, response: response.body })
  } catch (error) {
    logger.error(error)
  }
}

module.exports = job
