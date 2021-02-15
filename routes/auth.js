const { Router } = require('express')
const { check } = require('express-validator')
const { authSingup, authLogin } = require('../controllers/auth')

const router = Router()

// /api/auth/singup
router.post(
  '/singup',
  [
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Minimum password length 6 characters').isLength({
      min: 6,
    }),
  ],
  authSingup
)

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Please enter a valid email').normalizeEmail().isEmail(),
    check('password', 'Enter password').exists(),
  ],
  authLogin
)

module.exports = router
