//database connection

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB =  function(){

    try {
        mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true
        });
        
        console.log('MongoDB connected');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
