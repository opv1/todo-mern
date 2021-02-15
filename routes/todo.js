const { Router } = require('express')
const auth = require('../middleware/auth')
const {
  addTodo,
  getTodos,
  getTodosList,
  getTodosCompleted,
  getTodo,
  deleteTodos,
  deleteTodo,
  updateTodo,
} = require('../controllers/todo')

const router = Router()

// /api/todo/add
router.post('/add', auth, addTodo)

// /api/todo/
router.get('/', auth, getTodos)

// /api/todo/list/id
router.get('/list/:id', auth, getTodosList)

// /api/todo/completed
router.get('/:completed', auth, getTodosCompleted)

// /api/todo/id
router.get('/:id', auth, getTodo)

// /api/todo/
router.delete('/', auth, deleteTodos)

// /api/todo/id
router.delete('/:id', auth, deleteTodo)

// /api/todo/id
router.put('/:id', auth, updateTodo)

module.exports = router
