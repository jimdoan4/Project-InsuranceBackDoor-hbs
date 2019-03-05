// Post Model
const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const NoteSchema = new Schema({
    title: String,
    chapter: String,
    description: String,
    hints: String
})

module.exports = mongoose.model('Note', NoteSchema)