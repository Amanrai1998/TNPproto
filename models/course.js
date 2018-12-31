const mongoose = require("mongoose");

const btechcourseSchema = new mongoose.Schema({
    departmentName: String,
    seat: Number,
    description: String
});
const mtechprogramSchema = new mongoose.Schema({
    name: String,
    description: String
});
const mbaprogramSchema = new mongoose.Schema({
    name: String
});
const mtechcourseSchema = new mongoose.Schema({
    departmentName: String,
    seat: Number,
    program: [mtechprogramSchema]
});
const mbacourseSchema = new mongoose.Schema({
    about: String,
    seat: Number,
    technicalSpec: [mbaprogramSchema],
    functionalSpec: [mbaprogramSchema]
});
const courseSchema = new mongoose.Schema({
    graduationType: String,
    courseName: String,
    totalSeats: Number,
    data: [{}]
});

const Course = mongoose.model("Course",courseSchema);
module.exports = Course;