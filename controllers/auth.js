const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const keys = require('../config/keys')
const User = require('../models/User')
const generateToken = require('../helpers/generateToken')

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

const authSingin = async (req, res) => {
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

    const accessToken = generateToken({ userId: user.id }, keys.JWT_SECRET, {
      expiresIn: '1h',
    })

    const refreshToken = generateToken(
      { userId: user.id },
      keys.JWT_SECRET_REFRESH,
      { expiresIn: '24h' }
    )

    res.json({ accessToken, userId: user.id })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const authCheck = async (req, res) => {
  const { userId } = req.user

  const accessToken = generateToken({ userId }, keys.JWT_SECRET, {
    expiresIn: '1h',
  })

  return res.json({ accessToken, userId })
}

module.exports = { authSingup, authSingin, authCheck }
