import express from "express";
import { connectMongoose } from "./util/connectMongoose.js";
import orderRouter from "./router/orderRouter.js";
import tableRouter from "./router/tableRouter.js";
const PORT = 3000;
const app = express();

const connected = await connectMongoose();
app.use(express.json())

app.use(orderRouter)
app.use(tableRouter)

if(connected){
    app.listen(PORT, () => {
        console.log(`app listening on port ${PORT}`);
    })
}
