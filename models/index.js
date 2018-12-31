const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost:27017/TNPproto", {useNewUrlParser: true});
mongoose.Promise = Promise;

module.exports.Contact = require("./contact");
module.exports.Course = require("./course");