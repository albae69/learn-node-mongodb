const express = require('express')
const router = express.Router()

// Model
const answerModel = require('../models/AnswerModel')

// GET ALL ANSWER
//GET /api/answers
router.get('/', async (req, res) => {
  try {
    const result = await answerModel.find()
    if (result != null) {
      res.status(200).send({
        success: true,
        message: 'Success get all list of answers',
        data: result,
      })
    } else {
      console.error('error while get all answers', error)
      res.status(400).send({
        success: false,
        message: 'error while get all list of answers',
      })
    }
  } catch (error) {
    console.error('error while get all answers', error)
    res.send(500).send({
      success: false,
      message: 'error while get all list of answers',
    })
  }
})

// Answer a question
//POST /api/answers
router.post('/', async (req, res) => {
  try {
    const { answer, questionId, user } = req.body
    const result = await answerModel.create({
      answer: answer,
      questionId: questionId,
      user: user,
    })
    if (result != null) {
      res.status(201).send({
        success: true,
        message: 'Answer added successfully!',
        data: result,
      })
    } else {
      console.error('error while create answer', error)
      res.status(400).send({
        success: false,
        message: 'Failed to add an answer',
      })
    }
  } catch (error) {
    console.error('error while create answer', error)
    res.status(500).send({
      success: false,
      message: 'Server error while adding answer',
    })
  }
})

module.exports = router
