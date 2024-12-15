import mongoose from "mongoose";

const connectDb = async () => {
    try {
        if (!process.env.CONNECTION) {
            throw new Error("CONNECTION_STRING is undefined in the environment variables");
        }

        const connect = await mongoose.connect(process.env.CONNECTION);
        console.log(
            `Database connected successfully: ${connect.connection.host}, Database: ${connect.connection.name}`
        );
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
};

export default connectDb;
