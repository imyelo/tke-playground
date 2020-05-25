const { CronJob } = require('cron')
const job = require('./job')
const logger = require('./logger')

const SCHEDULE = '0 */5 * * * *'

const cron = new CronJob(SCHEDULE, () => job())

cron.start()

logger.info('cronjob ready')
