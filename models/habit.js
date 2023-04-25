const mongoose = require('mongoose');


// habit schema
const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: [String],
    enum: ['done', 'not done', 'none'],
    default: ['none', 'none', 'none', 'none', 'none', 'none', 'none']  // status for 7 days
  },
  date: {
    type: String,
    required: true
  },
  days:{
    type: String,
    required: true
  },
  fulldate:{
    type: String,
    required: true
  }
},{
  timestamps: true
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
