var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');

mongoose.connect("mongodb://cesco:c1203422!@ds125565.mlab.com:25565/cescomap");
var db = mongoose.connection;
db.once("open",function (){
  console.log("DB conneted!");
});
db.on("error" ,function (err){
  console.log("DB ERROR :" err)
});

app.set("view engine", 'ejs');
app.use(express.static(path.join(__dirname + '/public')));

var data={count:0};
app.get('/', function (req,res){
  data.count++;
  res.render('my_first_ejs',data);
});
app.get('/reset', function(req,res){
  data.count=0;
  res.render('my_first_ejs',data);
});
app.get('/set/count', function(req,res){
  if(req.query.count) data.count=req.query.count;
  res.render('my_first_ejs',data);
});
app.get('/set/:num', function (req,res){
  data.count=req.params.num;
  res.render('my_first_ejs',data);
});
app.get('/', function (req,res){
  res.render('my_first_ejs');
});

var port = process.enc.PORT || 5000;
app.listen(5000, function(){
  console.log('Server On!');
});
