const express =  require("express");
const bodyParser = require("body-parser");
const ejs =  require("ejs");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js"); //our module
mongoose.connect("mongodb://localhost:27017/thanaDB", { useNewUrlparser: true });

const{spawn} = require('child_process');
var newuser = "admin";
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const itemSchema = new mongoose.Schema({
    name: String
});

const Item = mongoose.model("Item", itemSchema);






app.get("/",function(req,res){
  res.render('main')
})

app.post("/",function(req,res){
   newuser = req.body.id;
   res.redirect("home")
});

app.get("/home",function(req,res){
    res.render("home",{user: naam})
})

app.post("/home",function(req,res){
   var enroll = req.body.enroll;
   console.log(enroll);
   var pythonscript = spawn('python',['test.py',enroll]);
   pythonscript.stdout.on('data',function(data) {
    //console.log('data pipe from py script')
    datatosend = data.toString()
   });

   pythonscript.on('close',(code)=>{
    //console.log(code);
    console.log(datatosend);
    res.json({
        naam:datatosend
    })
   }); 
   res.redirect("/home")
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