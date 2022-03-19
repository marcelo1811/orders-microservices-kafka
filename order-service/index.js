const express = require('express')
const produce = require('./producer')
const app = express()
const port = 3000

app.get('/orders', async (req, res) => {
  const query = req.query;
  res.send(query.message)
  produce(query.message)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})