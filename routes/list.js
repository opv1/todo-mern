const { Router } = require('express')
const auth = require('../middleware/auth')
const {
  addList,
  getLists,
  getList,
  deleteList,
} = require('../controllers/list')

const router = Router()

// /api/list/add
router.post('/add', auth, addList)

// /api/list/
router.get('/', auth, getLists)

// /api/list/id
router.get('/:id', auth, getList)

// /api/list/id
router.delete('/:id', auth, deleteList)

module.exports = router
