const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Student = require("../models/student");

const lectureSchema = mongoose.Schema({
  name : {type : String, required : true},
  day : {type : Number, required : true},
  hour : {type : Number, required : true},
  students: [{ type: Schema.Types.ObjectId, ref: Student}]
});

module.exports = mongoose.model('Lecture', lectureSchema);
