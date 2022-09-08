const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.get('/', (req, res) => {
  res.send("Server is on now")
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})