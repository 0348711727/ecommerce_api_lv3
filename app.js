import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
const app = express();
dotenv.config();
const corsOption = {
  origin: 'http://localhost:3000/'
}
app.use(cors(corsOption))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/user', userRoute);
app.use('/api/post', postRoute);
// app.use(errorMiddleware);
export default app;