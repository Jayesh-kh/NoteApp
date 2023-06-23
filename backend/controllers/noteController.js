import noteModel from "../models/noteModel.js";
import jwt from "jsonwebtoken";

export const createNoteController = async (req, res) => {
  try {
    const notes = await noteModel.create({ ...req.body });
    return res.status(201).json({
      success: true,
      message: "Note created Successfully",
      notes,
    });
  }  catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in note creation",
      error,
    });
  }
}

export const getNotes = async (req, res) => {
  let token = req.headers.authorization;
  jwt.verify(token, process.env.JWT_SECRET, async (err, decode) => {
    try {
      let data = await noteModel.find({ user: decode.userId });
      res.send({
        data: data,
        message: "success",
        status: 1,
      });
    } catch (error) {
      res.send({
        message: error.message,
        status: 0,
      });
    }
  });
};
