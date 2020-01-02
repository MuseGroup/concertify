const express = require('express');
const app = express();
const path = require('path');
const PORT = 3005; //till 3005 hold on

const festivalController = require('./controllers/festivalController');
require('events').EventEmitter.prototype._maxListeners = 100;

const io = require('socket.io').listen(server);

app.use(express.json());
// app.use(express.static('assets'))


app.get('/',(req,res) => {
  res.status(200).sendFile(path.join(__dirname,'../index.html'));
});

app.get('/main',(req,res) => {
  res.redirect('/')
});

const festivals = {}
const users = {}
let numUsers = 0;

io.on('connection',socket => {
  console.log('socket connected'+socket.id)

socket.on('chat', (data) => {
  console.log('msg data recieved by server', data)
  io.sockets.emit('chat', data)
})
socket.on('typing',data =>{
  console.log('typing in server')
  socket.broadcast.emit('typing',data)
})


app.get('/festivals',festivalController.getFestivals, (req, res) => {
  res.status(200).json(res.locals.festivals);
});


//do we need a build
app.use('/build', express.static(path.join(__dirname, '../build')));
//use this create for messages instead if we decide to add socket io
// app.post('/festivals/create',festivalController.postFestivals,(req , res) => {
//   res.json(res.locals.festival);
// })

app.use('*', (req,res) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.sendStatus(500);
});

app.listen(PORT, () => {
  console.log(`Server is sicc on port: ${PORT}`);
});
