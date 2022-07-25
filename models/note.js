import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema({
  unit: {type: Number, min: 1, max: 4, default: 1, required: true},
  content: String,
},{
  timestamps: true,
})

const Note = mongoose.model('Note', noteSchema)

export { Note }
