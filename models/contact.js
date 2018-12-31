const mongoose = require("mongoose");

const coordinatorSchema = new mongoose.Schema({
    name: String,
    mobile: Number
});

const contactSchema = new mongoose.Schema({
    departmentType: String,
    courseName: String,
    departmentName: String,
    Email: String,
    contact: [coordinatorSchema]
});

const Contact = mongoose.model("Contact",contactSchema);
module.exports = Contact;

