import express from "express";
import {
  createNoteController, getNotes
  
  
} from "../controllers/noteController.js";

//router object
const router = express.Router();

//routing
//create Route for register
router.post("/createNote", createNoteController);

router.get("/getNotes", getNotes)



export default router;