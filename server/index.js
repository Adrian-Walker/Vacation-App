import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://1wayoranother:raymond@cluster0.wrqoaae.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log(`Server running on port ${PORT}`);
  })
  .catch((err) => console.log(err.message));
