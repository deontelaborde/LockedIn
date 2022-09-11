const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()

const AppRouter = require('./routes/AppRouter')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send("Server is on now")
})
app.use('/api', AppRouter)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})