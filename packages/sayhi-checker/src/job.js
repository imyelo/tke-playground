const got = require('got')
const { nanoid } = require('nanoid/async')
const logger = require('./logger')
const { SAYHI_ENDPOINT } = require('./env')

const job = async () => {
  try {
    const id = await nanoid()
    logger.info({ id })
    const response = await got(SAYHI_ENDPOINT)
    logger.info({ id, response: response.body })
  } catch (error) {
    logger.error(error)
  }
}

module.exports = job
