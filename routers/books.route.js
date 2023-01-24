const { Router } = require('express')
const { bookController } = require('../controllers/books.controller')

const router = Router()

router.post('/admin/book', bookController.addBook)
router.get('/book', bookController.getBook)
router.get('/book/:id', bookController.getBookId)
router.get('/book/genre/:id', bookController.getBookGenreId)
router.patch('/admin/book/:id', bookController.updateBook)
router.delete('/admin/book/:id', bookController.deleteBook)
router.patch('/book/return/:bookid/:clientid', bookController.returnBook)
router.patch('/book/:bookid/:clientid', bookController.rentBook)
router.patch('/book/block/user/:clientid', bookController.blokClient)
router.patch('/book/unlock/user/:clientid', bookController.unlockClient)

//admin
router.get('/admin/book', bookController.getBook)


module.exports = router