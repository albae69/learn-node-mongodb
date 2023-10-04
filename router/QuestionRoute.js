const express = require('express')
const router = express.Router()

// Model
const questionModel = require('../models/QuestionModel')

//Add a question
//POST /api/questions - ADD QUESTION
router.post('/', async (req, res) => {
  try {
    const { description, imageUrl, userId } = req.body
    const result = await questionModel.create({
      userId: userId,
      description: description,
      imageUrl: imageUrl,
    })
    if (result != null) {
      res.status(201).send({
        success: true,
        message: 'Success added question',
        data: result,
      })
    } else {
      console.error('error while create question', error)
      res.status(400).send({
        success: false,
        message: 'Failed to add question',
      })
    }
  } catch (error) {
    console.error('error while create question', error)
    res.status(500).send({
      success: false,
      message: 'Server error while add question!',
    })
  }
})

//Get all questions
//GET /api/questions - GET ALL QUESTIONS
router.get('/', async (req, res) => {
  try {
    const result = await questionModel
      .aggregate([
        {
          $lookup: {
            from: 'answers',
            localField: '_id',
            foreignField: 'questionId',
            as: 'allAnswers',
          },
        },
      ])
      .exec()

    if (result != null) {
      res.status(200).send(result)
    } else {
      console.error('error while getting questions', error)
      res.status(400).send({
        success: false,
        message: 'Unable to get the questions',
      })
    }
  } catch (error) {
    console.error('error while getting questions', error)
    res.status(500).send({
      success: false,
      message: 'Server error while getting questions',
    })
  }
})

module.exports = router
