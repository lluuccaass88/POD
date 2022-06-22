const express = require('express')
const dbConnect = require('./database/index')
const routes = require('./controllers/controller')

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('...')
})

app.use("/clients", routes)

dbConnect.connecting()

app.listen(port, () => {
  console.log(`Server run in port: ${port}`)
})

module.exports = app
