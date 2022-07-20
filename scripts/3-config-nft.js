import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0xC03A4290658F9d9aD901508e1a071A243e07Ad2d"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Seasoned Chef Necklace",
        description: "This NFT will give you access to FoodieDAO!",
        image: readFileSync("scripts/assets/foodie.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
