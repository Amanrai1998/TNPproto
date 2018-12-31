const express   = require("express"),
      router    = express.Router(),
      axios     = require("axios");

router.get("/",(req,res)=>{
    res.render("home",{active: 0});
});
router.get("/about",(req,res)=>{
    res.render("about",{active: 1});
});
router.get("/innovations",(req,res)=>{
    res.render("innovations",{active: 3});
});
router.get("/statistics",(req,res)=>{
    res.render("statistics",{active: 4});
});
router.get("/contact/:course",(req,res)=>{
    let url = `http://localhost:3001/api/contact/${req.params.course}`;
    axios.get(url)
        .then(response=>{
            res.render("contact",{active: 5,sideActive: req.params.course,contacts: response.data})
        })
        .catch(err=>{console.log(err)});

});
router.get("/programme/seats",(req,res)=>{
    let url = `http://localhost:3001/api/course`;
    axios.get(url)
        .then(response=>{
            res.render("programme",{active: 2,sideActive: "seats", seats: response.data})
        })
        .catch(err=>{console.log(err)})
});
router.get("/programme/:course",(req,res)=>{
    let url = `http://localhost:3001/api/course/${req.params.course}`;
    axios.get(url)
        .then(response=>{
            res.render("programme",{active: 2,sideActive: req.params.course, courses: response.data})
        })
        .catch(err=>{console.log(err)})
});


module.exports = router;