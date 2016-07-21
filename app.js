var express = require('express');
var fs = require('fs');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express();

app.get('/', function(req, res) {
  res.writeHead(200, { 'content-type': 'text/html' })
  var fileStream = fs.createReadStream('./public/index.html');
  fileStream.pipe(res);
});

app.post('/upload', upload.single('fileUpload'), function(req, res) {
    res.send({size:req.file.size});
});

app.listen(8080, function() {
  console.log('Image Search Server listening on port 8080!');
});