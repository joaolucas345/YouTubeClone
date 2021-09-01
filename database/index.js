const mariadb = require("mariadb").createPool({
    host:'localhost',
    user:'root',
    password:'<password>',
    database:'youtube',
    multipleStatements: true
})

const raw = (query) => {
    return new Promise((resolve , reject) => {
        mariadb.query(query)
                    .then(success => resolve(success))
                    .catch(err => reject(err))
    })
}

module.exports = { mariadb , raw }
