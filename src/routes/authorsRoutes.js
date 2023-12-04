import express from "express"
import AuthorsController from "../controllers/authorController.js"

const routes = express.Router()

routes.get('/autores', AuthorsController.ListAuthors)
routes.get('/autores/:id', AuthorsController.ListAuthorById)
routes.post('/autores', AuthorsController.CreateAuthor)
routes.put('/autores/:id', AuthorsController.UpdateAuthor)
routes.delete('/autores/:id', AuthorsController.DeleteAuthor)

export default routes