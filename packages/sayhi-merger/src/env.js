exports.PORT = process.env.APP_PORT || 3000
exports.TARGETS = JSON.parse(process.env.APP_TARGETS || '["http://sayhi/"]')
exports.DELAY_MAXIMUM = +process.env.APP_DELAY_MAXIMUM || 200
