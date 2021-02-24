const { Router } = require('express')
const authMiddleware = require('../middlewares/auth')
const {
  addList,
  getLists,
  getList,
  deleteList,
} = require('../controllers/list')

const router = Router()

router.post('/add', authMiddleware, addList)
router.get('/', authMiddleware, getLists)
router.get('/:id', authMiddleware, getList)
router.delete('/:id', authMiddleware, deleteList)

module.exports = router
