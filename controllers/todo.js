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

    res.status(201).json({ todo })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const todoAllGet = async (req, res) => {
  try {
    const todos = await Todo.find({ owner: req.user.userId })

    res.json(todos)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const todoAllIdGet = async (req, res) => {
  try {
    const todos = await Todo.find({ list: req.params.id })

    res.json(todos)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const todoCompletedGet = async (req, res) => {
  try {
    const todos = await Todo.find({ completed: req.params.completed })

    res.json(todos)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const todoIdGet = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)

    res.json(todo)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const todoAllDelete = async (req, res) => {
  try {
    const { list } = req.body

    const todos = await Todo.find({ list })

    res.json(todos)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const todoIdDelete = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)

    await todo.remove()

    res.json({ message: 'Todo deleted' })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const todoIdPut = async (req, res) => {
  try {
    const { completed } = req.body

    await Todo.findByIdAndUpdate(req.params.id, { completed })

    res.json({ message: 'Todo updated' })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

module.exports = {
  todoAddPost,
  todoAllGet,
  todoAllIdGet,
  todoCompletedGet,
  todoIdGet,
  todoAllDelete,
  todoIdDelete,
  todoIdPut,
}
