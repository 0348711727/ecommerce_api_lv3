import mongoose from "mongoose";
import app from "./app.js";
import db from "./models/index.model.js"
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connect to Mongo successfully"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  db.initial() //initial role collection
  res.send('hello')
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})