const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/habit-tracker')

const db = mongoose.connection

// error while connecting database
db.on('error', console.error.bind(console, "error connecting to MongoDB"))


// no error
db.once('open',()=>{
    console.log("connected to database")
})

module.exports = db;