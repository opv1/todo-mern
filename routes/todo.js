const { Router } = require('express')
const auth = require('../middleware/auth')
const Todo = require('../models/Todo')
const User = require('../models/User')
const List = require('../models/List')

const router = Router()

// /api/todo/add
router.post('/add', auth, async (req, res) => {
  try {
    const { text, listId } = req.body

    const todo = new Todo({
      text,
      list: listId,
      owner: req.user.userId,
    })

    await User.findOneAndUpdate(
      { _id: req.user.userId },
      {
        $push: {
          todos: todo,
        },
      }
    )

    await List.findOneAndUpdate(
      { _id: listId },
      {
        $push: {
          todos: todo,
        },
      }
    )

    await todo.save()

    res.status(201).json({ todo })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// /api/todo/all
router.get('/all', auth, async (req, res) => {
  try {
    const todos = await Todo.find({ owner: req.user.userId })

    res.json(todos)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// /api/todo/id
router.get('/:id', auth, async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)

    res.json(todo)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

module.exports = router
