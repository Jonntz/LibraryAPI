import express from 'express'
import books from './booksRoutes.js'
import authors from './authorsRoutes.js'
import editora from './editoraRoutes.js'

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node"))
    app.use(express.json(), books, authors, editora)
}

export default routes