const Client = require('../models/Client.model')

module.exports.clientController = {
addClient: async (req, res) => {
    try {
        const data = await Client.create({
            name: req.body.name
        })
        res.json(data)
    } catch (error) {
        res.json(error)
    }
    },
    rentBookClient: async (req, res) => {
        try {
            const data = await Client.findByIdAndUpdate(req.params.id,{
                $push: {books: req.body.books}
            })
            res.json(data)
        } catch (error) {
          res.json(error)  
        }
    }
}
