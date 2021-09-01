const { stdin, stdout } = require("process")
const { raw } = require('../index')
const readline = require("readline")
const fs = require("fs")
const ask = readline.createInterface({
    input: stdin,
    output: stdout
})



const down = async () => {
    ask.question("What is the migration name? " , async (migrationName) => {
        const migration = require(`${__dirname}/../migrations/${migrationName}.js`)
        await migration.down(raw)
        process.exit()
    })
}

down()

module.exports = down