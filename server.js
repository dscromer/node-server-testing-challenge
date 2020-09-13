const express = require("express")
const cors = require("cors")
const catsRouter = require("./cats/cats-router")

const server = express()

server.use(cors())
server.use(express.json())

server.use("/cats", catsRouter)
server.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Cats API"
    })
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong",
    })
})

module.exports = server