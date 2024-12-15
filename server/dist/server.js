"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// console.log("CONNECTION:", process.env.CONNECTION);
console.log("NAME:", process.env.NAME);
// connectDb();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5001;
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(PORT, () => {
    console.log(`Server started on port - ${PORT}`);
});
