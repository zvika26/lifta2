const express = require ('express');
const Lecture = require("../models/lecture");
const router = express.Router();

router.get("",(req, res, next) => {
  Lecture.find().then(docs =>{
    res.status(200).json({
      message: "Lectures fetched successfully1!",
      lectures: docs
    });
  })
});

router.post("",(req, res, next) =>{
  const lecture = new Lecture({
    name: req.body.name, //using body-parser
    day: req.body.day,
    hour: req.body.hour,
    students: []
  });
  lecture.save().then(createdLecture => {
    console.log(createdLecture);
    res.status(201).json({
      message: 'post lecture succeed',
      lectureId: createdLecture._id
    });
  });

});

router.delete("/:id", (req, res, next) => {
  Lecture.deleteOne({_id: req.params.id }).then(result => {
    res.status(200).json({ message: "Lecture deleted!" });
    console.log(message);
  });
});

router.put("/:id", (req, res, next) => {
  const lecture = new Lecture({
    _id: req.body._id,
    name: req.body.name,
    day: req.body.day,
    hour: req.body.hour,
    students: req.body.students
  });
  console.log(lecture.students);

  Lecture.updateOne({_id: req.params.id}, lecture).then(result => {
    res.status(200).json({ message: "Lecture **updated!" });
    console.log(req.body.students);
  });
});

module.exports = router;
