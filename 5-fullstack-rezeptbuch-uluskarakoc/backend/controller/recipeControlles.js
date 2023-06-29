import db from "../lowdbConfig.js";
import { v4 as uuid } from "uuid";

export async function getAllRecipes(req,res){
    await db.read();
    res.send(db.data)
}