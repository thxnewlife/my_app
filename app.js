var express = require('express');
var path = require('path');
var app = express();

app.set("view engine", 'ejs');
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function (req,res){
  res.render('my_first_ejs');
});

app.listen(5000, function(){
  console.log('Server On!');
});
