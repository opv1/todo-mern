const { Router } = require('express')
const auth = require('../middleware/auth')
const {
  listAddPost,
  listAllGet,
  listIdGet,
  listIdDelete,
} = require('../controllers/list')

const router = Router()

// /api/list/add
router.post('/add', auth, listAddPost)

// /api/list/all
router.get('/all', auth, listAllGet)

// /api/list/id
router.get('/:id', auth, listIdGet)

// /api/list/id
router.delete('/:id', auth, listIdDelete)

module.exports = router
