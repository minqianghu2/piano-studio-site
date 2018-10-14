var express = require("express")
var app = express();

app.set("view engine", "ejs");

// landing page
app.get("/",function(req,res){
    res.render("landing");
});


app.get("/class",function(req,res){
    var classes =[
        {name: "大提琴课程", image : "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b014429cf4c978a3e5b5_340.jpg",
        description:"课程学费：￥200每课时"},
        {name:"钢琴课程", image:"https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104496f9c571a6e9bdb8_340.jpg",
            description: "课程学费： ￥220每课时"},
        {name:"小提琴课程", image:"https://pixabay.com/get/e83db50929f0033ed1584d05fb1d4e97e07ee3d21cac104496f9c571a6e9bdb8_340.jpg", description:
                "课程学费：￥200每课时"},
                {name: "大提琴课程", image : "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b014429cf4c978a3e5b5_340.jpg",
        description:"课程学费：￥200每课时"},
        {name:"钢琴课程", image:"https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104496f9c571a6e9bdb8_340.jpg",
            description: "课程学费： ￥220每课时"},
        {name:"小提琴课程", image:"https://pixabay.com/get/e83db50929f0033ed1584d05fb1d4e97e07ee3d21cac104496f9c571a6e9bdb8_340.jpg", description:
                "课程学费：￥200每课时"}
        ]
    res.render("class", {classes: classes});
});

app.get("/aboutus", function(req,res){
    res.render("aboutus");
});

app.get("/blog", function(req,res){
    res.render("blog");
})

//setting server up
app.listen(process.env.PORT,process.env.IP, function(){
    console.log("server is on");
    
});

