const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const sauceRoutes = require("./routes/sauce");
const helmet = require("helmet");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config();

const MONGO_LOGIN = process.env.MONGO_LOGIN;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DB = process.env.MONGO_DB;

const app = express();

mongoose
  .connect(
    `mongodb+srv://` +
      MONGO_LOGIN +
      `:` +
      MONGO_PASSWORD +
      `@cluster0.0ekcryy.mongodb.net/` +
      MONGO_DB +
      `?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));
module.exports = app;
