const { Router } = require('express')
const { genreController} = require('../controllers/genres.controller')

const router = Router()

router.post('/admin/genre', genreController.addGenre)
router.get('/genre', genreController.getGenre)
router.patch('/admin/genre/:id', genreController.updateGenre)
router.delete('/admin/genre/:id', genreController.deleteGenre)



module.exports = router