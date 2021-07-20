
const mongoose = require('mongoose')

const connection = () => { mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
}

module.exports = connection;
