const { Router } = require('express')
const authMiddleware = require('../middlewares/auth')
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

router.post('/add', authMiddleware, addTodo)
router.get('/', authMiddleware, getTodos)
router.get('/list/:id', authMiddleware, getTodosList)
router.get('/:completed', authMiddleware, getTodosCompleted)
router.get('/:id', authMiddleware, getTodo)
router.delete('/', authMiddleware, deleteTodos)
router.delete('/:id', authMiddleware, deleteTodo)
router.put('/:id', authMiddleware, updateTodo)

module.exports = router
