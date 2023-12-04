import express from "express"
import BooksController from "../controllers/booksController.js"

const routes = express.Router()

routes.get('/livros', BooksController.ListBooks)
routes.get('/livros/busca', BooksController.ListBooksByEditora)
routes.get('/livros/:id', BooksController.ListBookById)
routes.post('/livros', BooksController.CreateBook)
routes.put('/livros/:id', BooksController.UpdateBook)
routes.delete('/livros/:id', BooksController.DeleteBook)

export default routes