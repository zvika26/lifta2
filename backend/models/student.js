const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Lecture = require("../models/lecture");

const studentSchema = mongoose.Schema({
  name : {type : String, required : true},
  lectures: [{ type: Schema.Types.ObjectId, ref: Lecture}]
});

module.exports = mongoose.model('Student', studentSchema);
