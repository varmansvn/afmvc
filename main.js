var express = require('express');
var app = express();

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
	res.render('index.html');
});


app.listen(8181);

console.log('App is listening on port: 8181');