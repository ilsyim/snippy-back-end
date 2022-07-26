import { Note } from "../models/note.js";

function addNote(req, res) {
  req.body.owner = req.user.profile
  Note.create(req.body)
  .then(note => {
    Note.findById(note._id)
    .populate('owner')
    .then(newNote => {
      res.json(newNote)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

// function show(req, res) {
//   Note.findById(req.params.id)
//   .then(note => {
//     res.json(note)
//   })
//   .catch(err => {
//     console.log(err)
//     res.status(500).json({err: err.errmsg})
//   })
// }






export {
  addNote,
  // show
}