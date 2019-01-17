const express = require ('express');
const Teacher = require("../models/teacher");
const router = express.Router();

router.get("",(req, res, next) => {
  Teacher.find().then(docs =>{
    res.status(200).json({
      message: "Teachers fetched successfully1!",
      teachers: docs
    });
  })
});

router.post("",(req, res, next) =>{
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

router.put("/:id", (req, res, next) => {
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

router.delete("/:id", (req, res, next) => {
  Teacher.deleteOne({_id: req.params.id }).then(result => {
    // console.log(result);
    res.status(200).json({ message: "Teacher deleted!" });
    // console.log(message);

  });
});

module.exports = router;

