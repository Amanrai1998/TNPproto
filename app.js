const express       = require("express"),
      app           = express(),
      bodyParser    = require("body-parser"),
      apiRoutes     = require("./routes/api"),
      generalRoutes = require("./routes/general");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/api",apiRoutes);
app.use("/",generalRoutes);


app.listen(3001,()=>{
    console.log("Server is running on PORT 3001");
});