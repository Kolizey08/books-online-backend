const Reviev = require('../models/Reviev.model')


module.exports.revievController = {
    addReviev: async (req, res) => {
        try {
            const data = await Reviev.create({
                text: req.body.text,
                client: req.body.client,
                book: req.body.book
            })
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
deleteReviev: async (req, res) => {
    try {
        await Reviev.findByIdAndDelete(req.params.id)
        res.json('коммент удален')
    } catch (error) {
        res.json(error)
    }
},
getReviev: async (req, res) => {
    try {
        const data = await Reviev.find().populate('client book')
        res.json(data)
    } catch (error) {
      res.json(error)  
    }
}
}