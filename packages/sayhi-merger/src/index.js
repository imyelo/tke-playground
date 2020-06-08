const micro = require('micro')
const app = require('./app')
const { PORT } = require('./env')

if (!module.parent) {
  micro(app).listen(PORT)
}
