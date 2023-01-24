const { Router } = require('express')
const { clientController } = require('../controllers/clients.controller')

const router = Router()

router.post('/client', clientController.addClient)
router.patch('/client/:id', clientController.rentBookClient)

module.exports = router