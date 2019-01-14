const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
  name : {type : String, required : true},
  profession : {type : String, required : true}
});

module.exports = mongoose.model('Teacher', teacherSchema);
