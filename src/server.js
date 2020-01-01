const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const festivalController = require('./controllers/festivalController');

app.use(express.json());
app.use(express.state('assets'))


app.get('/',(req,res) => {
  res.status(200).sendFile(path.join(__dirname,'../index.html'));
})



app.use('*',(req,res) => {
  res.sendStatus(404);
});

app.use('/build',express.static(path.join(__dirname, '../build')));

app.get('/festivals',festivalController.getFestivals, (req,res) => {
  res.json(res.locals.festivals);
})

app.post('/festivals/create',festivalController.postFestivals,(req , res) => {
  res.json(res.locals.festival);
})

app.use((err,req, res, next) => {
  console.log(err);
  res.sendStatus(500);
});

app.listen(PORT,() => {
  console.log(`Server is sicc on port: ${PORT}`);
});
