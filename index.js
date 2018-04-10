const mongoose 			= require('mongoose');
var restify 			= require('restify');
var server 				= restify.createServer();
var socket				= require('socket.io');
let io 					= socket(server);

server.use(restify.plugins.bodyParser());
let connection = mongoose.connect('mongodb://mongodb:27017/messaging_service');

//routes
server.get('/hello/:name', respond);
server.post('/send', 
	(req, res, next) => {
		// require some data
		console.log(req.params)
		console.log(JSON.stringify(req.body))
		return next();
	},
	(req, res, next) => {
		res.setHeader('content-type','application/json');
		res.send({"message":"this is a message."});
		return next();
	}
);


io.on('connection', function (){
	console.log('user connected')
})
server.listen(8080, () => {
 console.log('%s listening at %s', server.name, server.url);
});

async function respond(req, res, next) { 
	await test()
	res.send('hello '+ req.params.name);
}
async function test(){
	console.log('yola')
} 