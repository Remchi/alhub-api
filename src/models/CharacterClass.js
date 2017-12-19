import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String
});

export default mongoose.model("CharacterClass", schema);
