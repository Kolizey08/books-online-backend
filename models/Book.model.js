const mongoose = require('mongoose')

const bookShema = mongoose.Schema({
    name: String,
    author: String,
    genre: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Genre'
    },
    rent: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Client',
        default: null
    }
})

const Book = mongoose.model('Book', bookShema)
module.exports = Book