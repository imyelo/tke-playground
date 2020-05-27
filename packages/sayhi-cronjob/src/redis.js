const Redis = require('ioredis')
const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD, REDIS_DB } = require('./env')

module.exports = new Redis({
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASSWORD,
  db: REDIS_DB,
})
