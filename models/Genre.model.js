const mongoose = require('mongoose')

const genreShema = mongoose.Schema ({
    name: String
})

const Genre = mongoose.model('Genre', genreShema)
module.exports = Genre