const Todo = require('../models/Todo')

const todoAddPost = async (req, res) => {
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
}

const todoAllGet = async (req, res) => {
  try {
    const todos = await Todo.find({ owner: req.user.userId })

    return res.json(todos)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const todoAllIdGet = async (req, res) => {
  try {
    const todos = await Todo.find({ list: req.params.id })

    return res.json(todos)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const todoIdGet = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)

    return res.json(todo)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const todoAllDelete = async (req, res) => {
  try {
    const { list } = req.body

    const todos = await Todo.find({ list })

    return res.json(todos)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const todoIdDelete = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)

    await todo.remove()

    return res.json({ message: 'Todo deleted' })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const todoIdPut = async (req, res) => {
  try {
    const { completed } = req.body

    await Todo.findByIdAndUpdate(req.params.id, { completed })

    return res.json({ message: 'Todo updated' })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

module.exports = {
  todoAddPost,
  todoAllGet,
  todoAllIdGet,
  todoIdGet,
  todoAllDelete,
  todoIdDelete,
  todoIdPut,
}
