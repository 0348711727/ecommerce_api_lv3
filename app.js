import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const corsOption = {
  origin: 'http://localhost:3000/'
}
app.use(cors(corsOption))
app.use(express.urlencoded({ extended: true }))

export default app;