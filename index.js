const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 3210
const app = express()
const db = require('./db')
const router = require('./router')

// middlewares
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))

// cors
app.use(cors())

// routes
app.use('/api', router)

// connect to db
db.connect()

// start server
app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`)
})
