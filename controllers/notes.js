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

function show(req, res) {
  Note.find({})
  .populate('owner')
  .then(note => {
    res.json(note)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function deleteOne(req, res) {
  Note.findByIdAndDelete(req.params.id)
  .then(deletedNote => {
    res.json(deletedNote)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function update(req, res) {
  Note.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .populate('owner')
  .then(updatedNote => {
    res.json(updatedNote)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}


export {
  addNote,
  show,
  deleteOne as delete,
  update
}