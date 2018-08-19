const mongoose = require('mongoose');
const Shema = mongoose.Schema;

// Create Schema
const ItemSchema = new Shema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);