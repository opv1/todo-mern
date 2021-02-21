const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const corsMiddleware = require('./middleware/cors')
const authRoute = require('./routes/auth')
const listRoute = require('./routes/list')
const todoRoute = require('./routes/todo')

const app = express()
const PORT = process.env.PORT || keys.PORT

app.use(corsMiddleware)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/auth', authRoute)
app.use('/api/list', listRoute)
app.use('/api/todo', todoRoute)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || keys.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })

    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}...`)
    )
  } catch (err) {
    console.log(`Server error: ${err.message}`)
    process.exit(1)
  }
}

start()
