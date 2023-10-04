const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
  description: String,
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  answers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Answers',
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
})

module.exports = mongoose.model('Questions', QuestionSchema)
