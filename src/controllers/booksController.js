import book from "../models/Books.js"
import { author } from "../models/Author.js"
import { editora } from "../models/Editora.js"

class BooksController {
    static async ListBooks(req, res) {
        try {
            const booksList = await book.find({})
            res.status(200).json(booksList)
        } catch (err) {
            res.status(500).json({ error: `${err} ---  FAILED ON LIST BOOKS` })
        }
    }

    static async ListBookById(req, res) {
        try {
            const bookId = await book.findById(req.params.id)
            res.status(200).json(bookId)
        } catch (err) {
            res.status(500).json({ error: `${err} ---  FAILED ON LIST BOOK` })
        }
    }

    static async ListBooksByEditora(req, res) {
        const editora = req.query.editora
        try {
            const bookByEditora = await book.find({ editora })
            res.status(200).json(bookByEditora)
        } catch (err) {
            res.status(500).json({ error: `${err} ---  FAILED ON FIND BOOK` })
        }
    }

    static async CreateBook(req, res) {
        const newBook = req.body
        try {
            const authorFind = await author.findById(newBook.autor)
            const editoraFind = await editora.findById(newBook.editora)
            console.log(editoraFind)

            const fullBook = { ...newBook, autor: { ...authorFind._doc }, editora: { ...editoraFind._doc } }

            const createdBook = await book.create(fullBook)

            res.status(200).json({ message: "Book created successfully", book: createdBook })
        } catch (err) {
            res.status(500).json({ error: `${err} ---  FAILED ON CREATE BOOK` })
        }
    }

    static async UpdateBook(req, res) {
        try {
            await book.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).json({ success: true, message: "Book updated successfully" })
        } catch (err) {
            res.status(500).json({ error: `${err} ---  FAILED ON UPDATE BOOK` })
        }
    }

    static async DeleteBook(req, res) {
        try {
            await book.findByIdAndDelete(req.params.id)
            res.status(200).json({ success: true, message: "Book deleted successfully" })
        } catch (err) {
            res.status(500).json({ error: `${err} ---  FAILED ON DELETE BOOK` })
        }
    }
}

export default BooksController