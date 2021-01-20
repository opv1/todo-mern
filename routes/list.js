const { Router } = require('express')
const auth = require('../middleware/auth')
const List = require('../models/List')
const Todo = require('../models/Todo')

const router = Router()

// /api/list/add
router.post('/add', auth, async (req, res) => {
  try {
    const { title } = req.body

    const list = new List({
      title,
      owner: req.user.userId,
    })

    await list.save()

    return res.status(201).json({ list })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// /api/list/all
router.get('/all', auth, async (req, res) => {
  try {
    const lists = await List.find({ owner: req.user.userId })

    return res.json(lists)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// /api/list/id
router.get('/:id', auth, async (req, res) => {
  try {
    const list = await List.findById(req.params.id)

    return res.json(list)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// /api/list/id
router.delete('/:id', auth, async (req, res) => {
  try {
    const list = await List.findById(req.params.id)

    await list.remove()

    return res.json({ message: 'List deleted' })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

module.exports = router
