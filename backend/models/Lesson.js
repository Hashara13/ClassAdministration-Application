const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  originalName:{
    type:String,
  },
  mimeType: {
    type:String,
  },
  size: {
    type:Number
},
  uploadDate: { 
    type: Date, 
    default: Date.now 
},
  academicYear: {
    type: Date,
    required: true,
  },
  currentDate: {
    type: Date,
    default: Date.now 
  },
  expiredDate: {
    type: Date,
    required: true,
  },
});

const Lesson=mongoose.model('lesson',lessonSchema)
module.exports=Lesson;
