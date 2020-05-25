const got = require('got')
const logger = require('./logger')

const SAYHI_ENDPOINT = process.env.SAYHI_ENDPOINT || 'http://127.0.0.1:3000/'

const job = async () => {
  try {
    const response = await got(SAYHI_ENDPOINT)
    logger.info(response.body)
  } catch (error) {
    logger.error(error)
  }
}

module.exports = job
