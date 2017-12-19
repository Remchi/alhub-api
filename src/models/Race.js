import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  traits: [
    {
      name: { type: String, required: true },
      description: String
    }
  ],
  subraces: [
    {
      name: { type: String, required: true },
      description: String,
      traits: [
        {
          name: { type: String, required: true },
          description: String
        }
      ]
    }
  ]
});

export default mongoose.model("Race", schema);
