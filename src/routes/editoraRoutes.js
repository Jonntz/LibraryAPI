import express from "express"
import EditoraController from "../controllers/editoraController.js"

const routes = express.Router()

routes.get('/editora', EditoraController.ListEditoras)
routes.get('/editora/:id', EditoraController.ListEditoraById)
routes.post('/editora', EditoraController.CreateEditora)
routes.put('/editora/:id', EditoraController.UpdateEditora)
routes.delete('/editora/:id', EditoraController.DeleteEditora)

export default routes