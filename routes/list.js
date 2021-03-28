const { Router } = require('express')
const authMiddleware = require('../middlewares/auth')
const {
  addList,
  getLists,
  getList,
  deleteList,
  renameList,
} = require('../controllers/list')

const router = Router()

router.post('/add', authMiddleware, addList)
router.get('/', authMiddleware, getLists)
router.get('/:id', authMiddleware, getList)
router.delete('/:id', authMiddleware, deleteList)
router.put('/:id', authMiddleware, renameList)

module.exports = router
