const mongoose = require('mongoose')

const clientShema = mongoose.Schema({
    name: String,
    books: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Book",
    }],
    isBlocked: {
        type: Boolean,
        default: false
    }
})

const Client = mongoose.model('Client', clientShema)
module.exports = Client