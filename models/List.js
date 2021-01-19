const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  title: { type: String, required: true },
  todos: [{ type: Types.ObjectId, ref: 'Todo' }],
  owner: { type: Types.ObjectId, ref: 'User' },
})

module.exports = model('List', schema)
