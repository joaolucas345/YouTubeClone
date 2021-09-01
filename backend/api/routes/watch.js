import express from 'express'
import fs from 'fs'

const app = express.Router()

app.get("/" , (req,res) => {
    const range = req.headers.range
    if(!range) res.status(400).send("You need a range")

    const videoPath = `${__dirname}/../data/VID-20160825-WA0002.mp4`
    const videoSize = fs.statSync(videoPath).size

    const chunckSize = 10 ** 6// 1 MB
    const start = Number(range.replace(/\D/g, ""))
    const end = Math.min(start + chunckSize , videoSize - 1)

    const contentLength = end - start + 1
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4"
    }

    res.writeHead(206 , headers)
    const videoStream = fs.createReadStream(videoPath , {start , end})
    videoStream.pipe(res)
})

module.exports = app
