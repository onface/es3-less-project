var iPackage = require('../package.json')
var hashToPort = require('hash-to-port')
module.exports = function () {
    return {
        mockServerPort: hashToPort('ES3-LESS-MOCK-SERVER:' + iPackage.name),
        liveReloadPort: hashToPort('ES3-LESS-LIVERELOAD-SERVER:' + iPackage.name)
    }
}
