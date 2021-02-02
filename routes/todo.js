const { Router } = require('express')
const auth = require('../middleware/auth')
const {
  todoAddPost,
  todoAllGet,
  todoAllIdGet,
  todoCompletedGet,
  todoIdGet,
  todoAllDelete,
  todoIdDelete,
  todoIdPut,
} = require('../controllers/todo')

const router = Router()

// /api/todo/add
router.post('/add', auth, todoAddPost)

// /api/todo/all
router.get('/all', auth, todoAllGet)

// /api/todo/all/id
router.get('/all/:id', auth, todoAllIdGet)

// /api/todo/completed
router.get('/:completed', auth, todoCompletedGet)

// /api/todo/id
router.get('/:id', auth, todoIdGet)

// /api/todo/all
router.delete('/all', auth, todoAllDelete)

// /api/todo/id
router.delete('/:id', auth, todoIdDelete)

// /api/todo/id
router.put('/:id', auth, todoIdPut)

module.exports = router
