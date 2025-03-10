const express = require('express')
require('dotenv').config()
const port = process.env.port
const app = express()
app.listen(port, ()=>console.log(`The server is running at http://localhost:${port}`))