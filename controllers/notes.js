import { Note } from "../models/note.js";

function addNote(req, res) {
  req.body.owner = req.user.profile
  Note.create(req.body)
  .then(note => {
    Note.findById(note._id)
    res.json(newNote)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}








export {
  addNote,
}