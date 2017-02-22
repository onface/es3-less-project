var config = require('./getConfig.js')()
var open = require('open')
open('http://127.0.0.1:' + config.mockServerPort + "?刷新浏览器")
