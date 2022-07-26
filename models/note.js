import mongoose from 'mongoose'

const Schema = mongoose.Schema

const noteSchema = new mongoose.Schema({
  unit: {type: Number, min: 1, max: 4, default: 1},
  content: String,
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
  videoId: "String"
},{
  timestamps: true,
})

const Note = mongoose.model('Note', noteSchema)

export { Note }
