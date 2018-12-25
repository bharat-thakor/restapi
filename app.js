var express = require('express');
var bodyParser = require('body-parser');
var services = require('./routes/approutes');

var app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));

app.use(function (req, res, next) {
	next();
});

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,token");
	next();
});

//include the file to route all the web based requests
app.use('/api/v1', services);


app.use(function (req, res, next) {
	console.log("response header " + res.headersSent);
	next();
});

var port = process.env.PORT || 3000;
app.set('port', port);

//listen to all incoming request on the assigned port
app.listen(port, function () {
	console.log('Process  is listening ' + port);
	app.timeout = 300000;
});
