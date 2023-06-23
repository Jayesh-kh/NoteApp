import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    note: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("note", noteSchema);
