const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.get('/', (req, res) => res.send())

app.listen(9090, () => {
  console.log('Server started!')
})