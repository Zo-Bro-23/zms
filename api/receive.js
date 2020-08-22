db = require('./db')

function receive(req, resp){
    db.any(`insert into otp(otp, phone) values(${req.query.otp}, ${req.query.phone})`)
        .then((r) => resp.send('Success!'))
}

module.exports = receive