const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const ProfessorSchema = new Schema({
    name: String,
    courseNumber: String,
    descriptionLevel: String,
    rating: Number,
    comments: String
})

module.exports = mongoose.model('Professor', ProfessorSchema)