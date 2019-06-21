let mongoose = require('mongoose');

let Schema = new mongoose.Schema({

    emp_ID: {
        type: Number
    },
    date: {
        type: String
        // required: true
    },
    in_time: {
        type: String
    },
    out_time: {
        type: String
    }
});

module.exports = mongoose.model('Week', Schema);