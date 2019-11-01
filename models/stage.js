// We will need our mongoose library
const mongoose = require(`mongoose`);

// Our schema
const StageSchema = new mongoose.Schema({
  stageName: {
    type: String,
    required: true
  },
  stageDescription: {
    type: String,
    required: true
  },
  day: {
    type: String,
    enum: ['MONDAY', 'TUESDAY', 'wEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY'],
    default: 'MONDAY'
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
module.exports = mongoose.model('Stage', StageSchema);