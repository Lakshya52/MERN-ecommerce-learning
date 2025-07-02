import express from 'express'

import dbconnection from './db.js'
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)