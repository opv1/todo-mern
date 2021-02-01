const List = require('../models/List')

const listAddPost = async (req, res) => {
  try {
    const { title } = req.body

    const list = new List({
      title,
      owner: req.user.userId,
    })

    await list.save()

    res.status(201).json({ list })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const listAllGet = async (req, res) => {
  try {
    const lists = await List.find({ owner: req.user.userId })

    res.json(lists)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const listIdGet = async (req, res) => {
  try {
    const list = await List.findById(req.params.id)

    res.json(list)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

const listIdDelete = async (req, res) => {
  try {
    const list = await List.findById(req.params.id)

    await list.remove()

    res.json({ message: 'List deleted' })
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

module.exports = { listAddPost, listAllGet, listIdGet, listIdDelete }
