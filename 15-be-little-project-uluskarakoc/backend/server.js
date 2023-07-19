import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectMongoose } from "./util/connectMongoose.js";
import generalRouter from "./routes/generalRoutes.js";
import roomRouter from "./routes/roomRoutes.js";
import reservationRouter from "./routes/reservationRouter.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(roomRouter);
app.use(reservationRouter);
app.use(generalRouter);

const connected = await connectMongoose();

if (connected) {
  app.listen(PORT, () => {
    console.log(`Verbunden an Port ${PORT}`);
  });
} else {
  console.error("Verbindung zu mongodb nicht möglich.");
}
