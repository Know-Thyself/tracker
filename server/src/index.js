require('./models/user')
require('./models/track')
const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const requireAuth = require('./middlewares/requireAuth')
const trackRoutes = require('./routes/trackRoutes')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
app.use(express.json())
app.use(authRoutes)
app.use(trackRoutes)
const port = 4000 || process.env.PORT
const connectionString = process.env.CONNECTION_STRING

const mongoUri = connectionString

mongoose.connect(mongoUri)
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance')
})
mongoose.connection.on('error', err => {
  console.error('Unable to connect to mongo', err)
})

app.get('/', requireAuth, (req, res) => {
  res.send(`Your account detail is: ${req.user}`)
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
