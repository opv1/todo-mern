const { validationResult } = require('express-validator')
const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const keys = require('../config/keys')
const User = require('../models/User')

const generateToken = (userId) => {
  return jsonwebtoken.sign({ userId }, keys.JWT_SECRET, {
    expiresIn: '1h',
  })
}

const authSingup = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect registration data',
      })
    }

    const { email, password } = req.body

    const candidate = await User.findOne({ email })

    if (candidate) {
      return res.status(400).json({ message: 'This user already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = new User({ email, password: hashedPassword })

    await user.save()

    res.status(201).json({ message: 'User created' })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const authLogin = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Invalid login data',
      })
    }

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ message: 'User is not found' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' })
    }

    const token = generateToken(user.id)

    res.json({ token, userId: user.id })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const authCheck = async (req, res) => {
  const { userId } = req.user

  const token = generateToken(userId)

  return res.json({ token })
}

module.exports = { authSingup, authLogin, authCheck }
