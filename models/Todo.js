const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
  list: { type: Types.ObjectId, ref: 'List' },
  owner: { type: Types.ObjectId, ref: 'User' },
})

module.exports = model('Todo', schema)
