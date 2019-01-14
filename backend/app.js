const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');

const Teacher = require ('./models/teacher');

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

app.post('/api/teachers',(req, res, next) =>{
  const teacher = new Teacher({
    name: req.body.name, //using body-parser
    profession: req.body.profession //using body-parser
  });
  teacher.save().then(createdTeacher => {
    console.log(createdTeacher);
    res.status(201).json({
      message: 'post teacher succeed',
      teacherId: createdTeacher._id
    });
  });

});
app.get('/api/teachers',(req, res, next) => {
  Teacher.find().then(docs =>{
    res.status(200).json({
      message: "Teachers fetched successfully1!",
      teachers: docs
    });
  })
});
app.put("/api/teachers/:id", (req, res, next) => {
  const teacher = new Teacher({
    _id: req.body._id,
    name: req.body.name,
    profession: req.body.profession
  });
  Teacher.updateOne({_id: req.params.id}, teacher).then(result => {
    // console.log(result);
    res.status(200).json({ message: "Teacher **updated!" });
    // console.log(message);

  });
});
app.delete("/api/teachers/:id", (req, res, next) => {
  Teacher.deleteOne({_id: req.params.id }).then(result => {
    // console.log(result);
    res.status(200).json({ message: "Teacher deleted!" });
    // console.log(message);

  });
});

module.exports = app;
