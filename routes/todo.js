const { Router } = require('express')
const auth = require('../middleware/auth')
const Todo = require('../models/Todo')

const router = Router()

// /api/todo/add
router.post('/add', auth, async (req, res) => {
  try {
    const { text, list } = req.body

    const todo = new Todo({
      text,
      list,
      owner: req.user.userId,
    })

    await todo.save()

    return res.status(201).json({ todo })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// /api/todo/all
router.get('/all', auth, async (req, res) => {
  try {
    const todos = await Todo.find({ owner: req.user.userId })

    return res.json(todos)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// /api/todo/all/id
router.get('/all/:id', auth, async (req, res) => {
  try {
    const todos = await Todo.find({ list: req.params.id })

    return res.json(todos)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// /api/todo/id
router.get('/:id', auth, async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)

    return res.json(todo)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// /api/todo/all
router.delete('/all', auth, async (req, res) => {
  try {
    const { list } = req.body

    const todos = await Todo.find({ list })

    return res.json(todos)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// /api/todo/id
router.delete('/:id', auth, async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)

    await todo.remove()

    return res.json({ message: 'Todo deleted' })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// /api/todo/id
router.put('/:id', auth, async (req, res) => {
  try {
    const { completed } = req.body

    await Todo.findByIdAndUpdate(req.params.id, { completed })

    return res.json({ message: 'Todo updated' })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

module.exports = router
