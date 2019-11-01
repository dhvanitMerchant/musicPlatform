// We will need our mongoose library
const mongoose = require(`mongoose`);

// Our schema
const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    enum: ['ROCK', 'JAZZ'],
    default: 'ROCK'
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  }
}, {
    timestamps: true
  });

// Exporting our Artist model
module.exports = mongoose.model('Artist', ArtistSchema);