const { Router } = require('express')
const auth = require('../middleware/auth')
const {
  todoAddPost,
  todoAllGet,
  todoAllIdGet,
  todoIdGet,
  todoAllDelete,
  todoIdDelete,
  todoIdPut,
} = require('../controllers/todo')

const router = Router()

// /api/todo/add
router.post('/add', auth, (req, res) => todoAddPost(req, res))

// /api/todo/all
router.get('/all', auth, (req, res) => todoAllGet(req, res))

// /api/todo/all/id
router.get('/all/:id', auth, (req, res) => todoAllIdGet(req, res))

// /api/todo/id
router.get('/:id', auth, (req, res) => todoIdGet(req, res))

// /api/todo/all
router.delete('/all', auth, (req, res) => todoAllDelete(req, res))

// /api/todo/id
router.delete('/:id', auth, (req, res) => todoIdDelete(req, res))

// /api/todo/id
router.put('/:id', auth, (req, res) => todoIdPut(req, res))

module.exports = router
