require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

mongoose.connect(process.env.dataBase_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(err));
db.once("open", () => console.log("Connected to DB"));

app.use(express.json())

const lessonsRouter = require('./routes/lessons')
app.use('/lessons', lessonsRouter)
  

app.listen(port, () => console.log(`listening from port: ${port}`));