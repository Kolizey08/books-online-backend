const { Router } = require('express')
const { revievController } = require('../controllers/revievs.controller')

const router = Router()

router.post('/reviev', revievController.addReviev)
router.delete('/reviev/:id', revievController.deleteReviev)
router.get('/reviev', revievController.getReviev)

module.exports = router