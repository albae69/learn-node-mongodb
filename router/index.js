const express = require('express')
const router = express.Router()

const questionRoute = require('./QuestionRoute')
const answerRoute = require('./AnswerRoute')
const userRoute = require('./UserRoute')

router.get('/', (req, res) => {
  res.send('Welcome!')
})

router.use('/user', userRoute)
router.use('/questions', questionRoute)
router.use('/answers', answerRoute)

module.exports = router
