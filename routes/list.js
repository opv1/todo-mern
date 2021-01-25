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
router.post('/add', auth, (req, res) => listAddPost(req, res))

// /api/list/all
router.get('/all', auth, (req, res) => listAllGet(req, res))

// /api/list/id
router.get('/:id', auth, (req, res) => listIdGet(req, res))

// /api/list/id
router.delete('/:id', auth, (req, res) => listIdDelete(req, res))

module.exports = router
