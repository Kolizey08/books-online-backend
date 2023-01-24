const mongoose = require('mongoose')

const revievShema = mongoose.Schema ({
    text: String,
    client: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Client'
    },
    book: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Book'
    }
})

const Reviev = mongoose.model('Reviev', revievShema)
module.exports = Reviev