require('./models/user')
require('./models/track')
const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const requireAuth = require('./middlewares/requireAuth')
const trackRoutes = require('./routes/trackRoutes')
const { MongoClient, ServerApiVersion } = require('mongodb')
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

// const client = new MongoClient(mongoUri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// })
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect()
//     // Send a ping to confirm a successful connection
//     await client.db('admin').command({ ping: 1 })
//     console.log(
//       'Pinged your deployment. You successfully connected to MongoDB!'
//     )
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close()
//   }
// }
// run().catch(console.dir)

app.get('/', requireAuth, (req, res) => {
  res.send(`Your account detail is: ${req.user}`)
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
