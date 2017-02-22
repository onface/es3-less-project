var hashToPort = require('hash-to-port')
var config = require('./config/getConfig.js')()
var app = require('fms')
app.run({
    port: config.mockServerPort,
    static: '../',
    staticReplace: function (req, data) {
        // html file add livereload script
        if (/\.htm(l)?$/.test(req.path)) {
            data = data + "<script>\n  document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] +\n  ':" + config.liveReloadPort + "/livereload.js?snipver=1\"></' + 'script>')\n</script>"
        }
        return data
    }
})


app.ajax({
    url: '/ajax/login.php',
    type: 'post',
    res: {
        ok: {
            status: 'success'
        },
        err: {
            status: 'error',
            msg: 'Error detail!'
        }
    }
})
