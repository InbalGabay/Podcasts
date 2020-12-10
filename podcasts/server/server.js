const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const router = require("./routes/api");
dotenv.config();
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.listen(9000, () => console.log("listening to port 9000!"));

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connect to db");
  }
);

app.use("/api", router);
app.get("", (req, res) => {
  res.send("hello server");
});
