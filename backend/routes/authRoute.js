import express from "express";
import {
  registerController,
  loginController,
  
  
} from "../controllers/authController.js";

//router object
const router = express.Router();

//routing
//create Route for register
router.post("/register", registerController);

//create route for login
router.post("/login", loginController);

export default router;