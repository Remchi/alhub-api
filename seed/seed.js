import seeder from "mongoose-seed";
import dotenv from "dotenv";
import data from "./data.json";

dotenv.config();

seeder.connect(process.env.MONGODB_URL, () => {
  seeder.loadModels([
    "src/models/Background",
    "src/models/Race",
    "src/models/CharacterClass"
  ]);

  seeder.clearModels(["Background", "Race", "CharacterClass"], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});
