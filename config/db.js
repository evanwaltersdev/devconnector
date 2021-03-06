const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log('Mongo Connected!')
  } catch (err) {
    console.error(err.message)
    // Exit process with fail.
    process.exit(1)
  }
}

module.exports = connectDB
