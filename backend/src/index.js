import dbconnect from "./db/dbconnect.js";
import dotenv from "dotenv";
import { router } from "./route/user.routes.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})

dbconnect().then(() => {
    app.listen(process.env.PORT,() => {
        console.log("Server running at Port: ",process.env.PORT);
    })
    app.on("error",(err) => {
        console.log("Error connecting at: ",err);
    })
})
.catch((err) => {
    console.log("MongoDB connection failed: ",err);
    throw err;
})
