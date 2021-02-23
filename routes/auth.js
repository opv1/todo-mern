const { Router } = require('express')
const { check } = require('express-validator')
const authMiddleware = require('../middlewares/auth')
const { authSingup, authLogin, authCheck } = require('../controllers/auth')

const router = Router()

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

router.post(
  '/login',
  [
    check('email', 'Please enter a valid email').normalizeEmail().isEmail(),
    check('password', 'Enter password').exists(),
  ],
  authLogin
)

router.get('/', authMiddleware, authCheck)

module.exports = router
