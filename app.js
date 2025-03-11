const express = require('express')
require('dotenv').config()
const port = process.env.port || 8080
const app = express()
app.use(express.static('public'))
app.get('/', (req, res)=>res.send('The api is working normally.'))
app.listen(port, ()=>console.log(`The server is running at http://localhost:${port}`))