const express = require('express')
const router = express.Router()

// Model
const userModel = require('../models/UserModel')

// GET ALL USER
// GET api/user
router.get('/', async (req, res) => {
  try {
    const result = await userModel
      .aggregate([
        {
          $lookup: {
            from: 'questions',
            localField: '_id',
            foreignField: 'userId',
            as: 'allQuestion',
          },
        },
      ])
      .exec()
    if (result != null) {
      res.send({
        success: true,
        message: 'Success get all user',
        data: result,
      })
    } else {
      console.error('error while get all user', error)
      res.status(400).send({
        success: false,
        message: 'Failed to get all user',
      })
    }
  } catch (error) {
    console.error('error while get all user', error)
    res.status(500).send({
      success: false,
      message: 'Failed to get all user',
    })
  }
})

// ADD User
// POST - /api/user
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body
    const result = await userModel.create({
      name: name,
      email: email,
    })
    if (result != null) {
      res.status(201).send({
        success: true,
        message: 'Success create an user',
        data: result,
      })
    } else {
      res.status(400).send({
        success: false,
        message: 'Failed to create an user',
      })
    }
  } catch (error) {
    console.error('error while create user', error)
    res.status(500).send({
      success: false,
      message: 'Failed to create user',
    })
  }
})

module.exports = router
