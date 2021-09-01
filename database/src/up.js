const { stdin, stdout } = require("process")
const { raw } = require('../index')
const readline = require("readline")
const fs = require("fs")
const ask = readline.createInterface({
    input: stdin,
    output: stdout
})



const up = async () => {
    ask.question("What is the migration name? " , async (migrationName) => {
        const migration = require(`${__dirname}/../migrations/${migrationName}.js`)
        await migration.up(raw)
        process.exit()
    })
}

up()

module.exports = up