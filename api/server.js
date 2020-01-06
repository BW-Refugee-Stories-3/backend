const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const logger = require('../middleware/logger');


const usersRouter = require("../users/user-router");
const loginRouter = require("../auth/login-router.js");
const registerRouter = require("../auth/register-router.js");

const server = express()
// server utils
server.use(helmet())
server.use(express.json())
server.use(logger);
server.use(cors())

server.use("/api/auth/login", loginRouter);
server.use("/api/auth/register", registerRouter);
server.use("/api/users", usersRouter);

server.get('/', (req, res) => {
    res.send('<h1>🌎</h1>');
  })


module.exports = server