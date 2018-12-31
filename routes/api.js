const express   = require("express"),
      router    = express.Router(),
      db        = require("../models");

router.get("/contact/btech",(req,res)=>{
    db.Contact.find({courseName: "B.Tech"},(err, data)=>{
        if(err)
            console.log(err)
        else{
            res.status(200).json(data);
        }
    });
});
router.get("/contact/mtech",(req,res)=>{
    db.Contact.find({courseName: "M.Tech"},(err, data)=>{
        if(err)
            console.log(err)
        else{
            res.status(200).json(data);
        }
    });
});
router.get("/contact/mba",(req,res)=>{
    db.Contact.find({courseName: "MBA"},(err, data)=>{
        if(err)
            console.log(err);
        else{
            res.status(200).json(data);
        }
    });
});
router.get("/course",(req,res)=>{
    db.Course.find({},(err, data)=>{
        if(err)
            console.log(err);
        else{
            res.status(200).json(data);
        }
    });
});
router.get("/course/btech",(req,res)=>{
    db.Course.find({courseName: "B.Tech"},(err, data)=>{
        if(err)
            console.log(err);
        else{
            res.status(200).json(data);
        }
    });
});
router.get("/course/mtech",(req,res)=>{
    db.Course.find({courseName: "M.Tech"},(err, data)=>{
        if(err)
            console.log(err);
        else{
            res.status(200).json(data);
        }
    });
});
router.get("/course/mba",(req,res)=>{
    db.Course.find({courseName: "MBA"},(err, data)=>{
        if(err)
            console.log(err);
        else{
            res.status(200).json(data);
        }
    });
});

module.exports = router;