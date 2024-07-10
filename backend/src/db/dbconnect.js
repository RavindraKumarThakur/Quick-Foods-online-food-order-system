import mongoose from "mongoose";
import { MONGODB_NAME } from "../constants.js";


const dbconnect = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${MONGODB_NAME}`);
        console.log("\nMongoDB connected || DB host: ",connectionInstance.connection.host);
    } catch (error) {
        console.log("MONGOOSE connection failure",error);
        process.exit(1);
    }
}

export default dbconnect