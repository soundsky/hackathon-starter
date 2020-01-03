const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  track: String,
  artist: String,
  length: String
});

const Track = mongoose.model('Track', trackSchema);

module.exports = Track;
