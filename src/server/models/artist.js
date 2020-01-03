var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var artistSchema = new mongoose.Schema({
  name:  String,
  imgUrl: String,
  genre:  Array,
  spotifyId: String
});

var Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;