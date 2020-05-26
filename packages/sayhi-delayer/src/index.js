const micro = require('micro')
const app = require('./app')

const PORT = process.env.APP_PORT || 3000

if (!module.parent) {
  micro(app).listen(PORT)
}
