const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const logger = require('../middleware/logger');


const authRouter = require("../auth/auth-router.js");
// const storyRouter = require('../stories/stories-router')
const server = express()
// server utils
server.use(helmet())
server.use(express.json())
server.use(logger);
server.use(cors())

server.use("/api/auth", authRouter);
// server.use("/api/stories", storyRouter)

server.get('/', (req, res) => {
    res.send('<h1>🌎</h1>');
  })


module.exports = server