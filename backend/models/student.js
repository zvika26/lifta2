const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  name : {type : String, required : true},
  //TODO
});

module.exports = mongoose.model('Student', studentSchema);
