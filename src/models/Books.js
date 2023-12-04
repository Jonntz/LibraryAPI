import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const booksSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number, required: true },
    paginas: { type: Number },
    autor: authorSchema
}, { versionKey: false })

const book = mongoose.model('books', booksSchema)

export default book