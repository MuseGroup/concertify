const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MONGO_URI = "mongodb+srv://violet:ilovetesting@cluster0-fpdoy.mongodb.net/test?retryWrites=true&w=majority"


mongoose.conect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
  dbName: 'concertify'
})
.then(() => console.log('Connected to Mongoose'))
.catch(err => console.log(err));

const festivalSchema = new Schema({
  name: String,
})


const Festival = mongoose.model('festival',festivalSchema);
module.exports = Festival;