const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const studentSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    academicYear:{
        type:Date,
        required:true,
    },
})
// assign to Student(students) table through studentSchema model
const Student=mongoose.model('Student',studentSchema)
module.exports=Student;