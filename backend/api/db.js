var pgp = require('pg-promise')(/* options */)
var zo = pgp('postgres://username:password@host:port/database')

module.exports = zo