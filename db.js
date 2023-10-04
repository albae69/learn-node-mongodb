const mongoose = require('mongoose')

// load env
const dotenv = require('dotenv')
dotenv.config()

// connect to mongodb
module.exports.connect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('mongodb connected'))
    .catch((error) => console.error('Error connecting to mongodb', error))
}
