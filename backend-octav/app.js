var http = require('http');
var express = require('express');
var path = require('path');

var livestock = require('./routes/livestock');
var app =express();

var conn = require('express-myconnection');
var mysql = require('mysql');

app.set('port',process.env.PORT || 6969);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'assets')));

if ('development' - app.get('env')) {
	app.use(express.errorHandler());
};

app.use(
		conn(mysql,{

			host: 'localhost',
			user: 'root',
			password: '',
			port: 3306,
			database:'livestock'


		},'single')
	);

app.get('/livestock',livestock.liatin);
app.get('/livestock/tambah',livestock.tambah);
app.post('/livestock/tambah',livestock.tambah_simpen);
app.get('/livestock/ubah/:id',livestock.ubah);
app.post('/livestock/ubah/:id',livestock.ubah_simpen);
app.get('/livestock/hapus/:id',livestock.hapus);

app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Server Is Running On Port : ' + app.get('port'));
});