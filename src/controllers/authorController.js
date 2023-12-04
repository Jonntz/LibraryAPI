import { author } from "../models/Author.js"

class AuthorsController {
    static async ListAuthors(req, res) {
        try {
            const authorsList = await author.find({})
            res.status(200).json(authorsList)
        } catch (err) {
            res.status(500).json({ error: `${err} ---  FAILED ON LIST AUTHORS` })
        }
    }

    static async ListAuthorById(req, res) {
        try {
            const authorId = await author.findById(req.params.id)
            res.status(200).json(authorId)
        } catch (err) {
            res.status(500).json({ error: `${err} ---  FAILED ON LIST AUTHOR` })
        }
    }

    static async CreateAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body)
            res.status(200).json({ message: "Author created successfully", author: newAuthor })
        } catch (err) {
            res.status(500).json({ error: `${err} ---  FAILED ON CREATE AUTHOR` })
        }
    }

    static async UpdateAuthor(req, res) {
        try {
            await author.findByIdAndUpdate(req.params.id, req.body)
            res.status(200).json({ success: true, message: "Author updated successfully" })
        } catch (err) {
            res.status(500).json({ error: `${err} ---  FAILED ON UPDATE AUTHOR` })
        }
    }

    static async DeleteAuthor(req, res) {
        try {
            await author.findByIdAndDelete(req.params.id)
            res.status(200).json({ success: true, message: "Author deleted successfully" })
        } catch (err) {
            res.status(500).json({ error: `${err} ---  FAILED ON DELETE AUTHOR` })
        }
    }
}

export default AuthorsController