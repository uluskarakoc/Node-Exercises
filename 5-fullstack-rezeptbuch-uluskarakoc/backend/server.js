import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import {getAllRecipes} from "./controller/recipeControlles.js"
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;
const currentEnv = process.env.CURRENT_ENV;
if (currentEnv === "dev") {
  app.use(cors());
  app.use(morgan("combined"));
}
app.get("/recipes",getAllRecipes);




app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
