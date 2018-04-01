var restify 			= require('restify');
var server 				= restify.createServer();
server.use(restify.plugins.bodyParser());
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

server.listen(8080, () => {
 console.log('%s listening at %s', server.name, server.url);
});

function respond(req, res, next) { 
	res.send('hello '+ req.params.name);
} 