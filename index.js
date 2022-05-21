import mongoose from "mongoose";
import app from "./app.js";

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connect to Mongo successfully"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello")
})

app.listen("3000", () => {
  console.log("Listening on port 3000")
})