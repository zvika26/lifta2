const express = require ('express');
const Student = require("../models/student");
const router = express.Router();

router.get("",(req, res, next) => {
  Student.find().then(docs =>{
    res.status(200).json({
      message: "Students fetched successfully1!",
      students: docs
    });
  })
});

router.post("",(req, res, next) =>{
  const student = new Student({
    name: req.body.name, //using body-parser
  });
  student.save().then(createdStudent => {
    console.log(createdStudent);
    res.status(201).json({
      message: 'post student succeed',
      studentId: createdStudent._id
    });
  });

});

router.put("/:id", (req, res, next) => {
  const student = new Student({
    _id: req.body._id,
    name: req.body.name,
    lectures: req.body.lectures
  });
  Student.updateOne({_id: req.params.id}, student).then(result => {
    // console.log(result);
    res.status(200).json({ message: "Student **updated!" });
    // console.log(message);

  });
});

router.delete("/:id", (req, res, next) => {
  Student.deleteOne({_id: req.params.id }).then(result => {
    // console.log(result);
    res.status(200).json({ message: "Student deleted!" });
    // console.log(message);

  });
});

module.exports = router;
