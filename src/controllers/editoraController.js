import { editora } from "../models/Editora.js"

class EditoraController {
    static async ListEditoras(req, res) {
        try {
            const editorasList = await editora.find({})
            res.status(200).json(editorasList)
        } catch (err) {
            res.status(500).json({ error: `${err} ---  FAILED ON LIST EDITORAS` })
        }
    }

    static async ListEditoraById(req, res) {
        try {
            const editoraId = await editora.findById(req.params.id)
            res.status(200).json(editoraId)
        } catch (err) {
            res.status(500).json({ error: `${err} ---  FAILED ON LIST EDITORA` })
        }
    }

    static async CreateEditora(req, res) {
        try {
            const newEditora = await editora.create(req.body)
            res.status(200).json({ message: "Editora created successfully", editora: newEditora })
        } catch (err) {
            res.status(500).json({ error: `${err} ---  FAILED ON CREATE EDITORA` })
        }
    }

    static async UpdateEditora(req, res) {
        try {
            await editora.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).json({ success: true, message: "Editora updated successfully" })
        } catch (err) {
            res.status(500).json({ error: `${err} ---  FAILED ON UPDATE EDITORA` })
        }
    }

    static async DeleteEditora(req, res) {
        try {
            await editora.findByIdAndDelete(req.params.id)
            res.status(200).json({ success: true, message: "Editora deleted successfully" })
        } catch (err) {
            res.status(500).json({ error: `${err} ---  FAILED ON DELETE EDITORA` })
        }
    }
}

export default EditoraController