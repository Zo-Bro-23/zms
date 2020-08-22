const db = require('./db')

function send(req, resp){
    if (req.method == 'GET') {
        db.any('select * from otp')
            .then((r) => resp.send({status:'insert', data: r}))
    }
    if (req.method == 'DELETE'){
        db.any(`delete from otp where id = ${req.query.id}`)
            .then(resp.send('Deleted!'))
    }
}

module.exports = send