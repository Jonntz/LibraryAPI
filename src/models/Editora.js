import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true }
}, { versionKey: false })

const editora = new mongoose.model("editora", editoraSchema)

export { editora, editoraSchema }