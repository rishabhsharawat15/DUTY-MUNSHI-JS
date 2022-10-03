const express =  require("express");
const bodyParser = require("body-parser");
const ejs =  require("ejs");

var newuser = "admin";
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/",function(req,res){
  res.render('main')

})

app.post("/",function(req,res){
   newuser = req.body.id;
   res.redirect("home")
});

app.get("/home",function(req,res){
    res.render("home",{user: newuser})
})

app.get("/about", function(req, res) {
    res.render("about");
});

app.get("/navi", function(req, res) {
    res.render("navi");
});



// app.get("/compose", function(req, res) {
//     res.render("compose");
// })

app.listen(3000,function(){
    console.log("app is running");
});