const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  questions: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Questions',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = mongoose.model('User', UserSchema)
