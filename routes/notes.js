import { Router } from "express";
import * as notesCtrl from '../controllers/notes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, notesCtrl.show)

router.post('/', checkAuth, notesCtrl.addNote)

router.delete('/:id', checkAuth, notesCtrl.delete)

router.put('/:id', checkAuth, notesCtrl.update)


export { router }