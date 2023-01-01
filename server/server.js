import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

import router from './routes/blogPosts.routes.js'

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "50mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: "true" }));
app.use(cors());

app.use("/api/blogs",router)

const DB_CONNECTION = process.env.DATABASE_URL
  // "mongodb+srv://Divy31245:Divy%4031247@cluster0.najumjl.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 6000;

mongoose
  .connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server is running @ : http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.log(error));
