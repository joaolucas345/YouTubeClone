const { stdin, stdout } = require("process")
const readline = require("readline")
const fs = require("fs")
const ask = readline.createInterface({
    input: stdin,
    output: stdout
})

const migrationScript = 
`module.exports = {
    up: async (sqlRun) => {

    },
    down: async (sqlRun) => {

    }
}
`

const create = async () => {
    ask.question("What is the migration name? " , (migrationName) => {
        fs.writeFileSync(`${__dirname}/../migrations/${migrationName}.js` , migrationScript)
        process.exit()
    })
}

create()

module.exports = create