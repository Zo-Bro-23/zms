var pgp = require('pg-promise')(/* options */)
var zo = pgp('postgres://postgres:schoolEarly@schoolarly-db-instance.ccdwvpne8jqy.us-east-2.rds.amazonaws.com:5432/ZMS')

module.exports = zo