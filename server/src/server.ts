import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import shortUrl from "./routes/shortUrl";
dotenv.config();

connectDb();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/api/",shortUrl);

app.get("/hi",(req,res)=>{
    res.send("hello")
})
const PORT = process.env.PORT || 5001;

app.listen(PORT,()=>{
    console.log(`Server started on port - ${PORT}`);
    
})
