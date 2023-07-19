import express from "express";
import "dotenv/config";
import { connectMongoose } from "./util/connectMongoose.js";
import orderRouter from "./router/orderRouter.js";
import tableRouter from "./router/tableRouter.js";

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

app.use(orderRouter)
app.use(tableRouter)

const connected = await connectMongoose();

if (connected) {
  app.listen(PORT, () => {
    console.log(`Verbunden an Port ${PORT}`);
  });
} else {
  console.error("Verbindung zu Mongodb nicht möglich");
}
