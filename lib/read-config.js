/**
 * @author 锂锌 <zinc.lx@alibaba-inc.com>
 */
var path = require('path')
var findup = require('findup')

var CONF_NAME = 'cldr.conf.js'

module.exports = function() {
    return require(
        path.resolve(
            findup.sync(process.cwd(), CONF_NAME),
            CONF_NAME
        )
    )
}
