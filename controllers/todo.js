const Todo = require('../models/Todo')

const addTodo = async (req, res) => {
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

const getTodos = async (req, res) => {
  try {
    const { userId } = req.user

    const todos = await Todo.find({ owner: userId })

    res.json(todos)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const getTodosList = async (req, res) => {
  try {
    const { id } = req.params

    const todos = await Todo.find({ list: id })

    res.json(todos)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const getTodosCompleted = async (req, res) => {
  try {
    const { completed } = req.params

    const todos = await Todo.find({ completed })

    res.json(todos)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)

    res.json(todo)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const deleteTodos = async (req, res) => {
  try {
    const { list } = req.body

    const todos = await Todo.find({ list })

    res.json(todos)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)

    await todo.remove()

    res.json({ message: 'Todo deleted' })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const updateTodo = async (req, res) => {
  try {
    const { completed } = req.body

    await Todo.findByIdAndUpdate(req.params.id, { completed })

    res.json({ message: 'Todo updated' })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

module.exports = {
  addTodo,
  getTodos,
  getTodosList,
  getTodosCompleted,
  getTodo,
  deleteTodos,
  deleteTodo,
  updateTodo,
}
