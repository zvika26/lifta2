const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const teachersRoutes = require("./routes/teachers");
const studentsRoutes = require("./routes/students");
const lecturesRoutes = require("./routes/lectures");

const app = express();

mongoose.connect(
  "mongodb+srv://vichter:Zohar2017@cluster0-jnpdk.mongodb.net/lifta?retryWrites=true", { useNewUrlParser: true }
)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/teachers", teachersRoutes);
app.use("/api/students", studentsRoutes);
app.use("/api/lectures", lecturesRoutes);

module.exports = app;
