import express from "express"

const app = express()

//routes
const watch = require('../routes/watch')

app.use("/watch" , watch)

const PORT = 3001

app.listen(PORT , () => {
    console.log(`server running on port ${PORT}`)
})