var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*//==================================
var KiteTicker = require("kiteconnect").KiteTicker;
var ticker = new KiteTicker("kitefront", "SA0846", "1e2b551ef9e514b09efe768354c3f464");
*///==================================

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
	
	console.log('User connected via socket.io');

	socket.on('message', function (message) {
		console.log('Message received: ' + message.text);
		socket.broadcast.emit('message', message);
	});

	socket.emit('message', {
		text: 'Welcome to the chat application!'
	});

	/*/==================================
	ticker.connect();
	ticker.on("tick", setTick);
	ticker.on("connect", subscribe);

	function setTick(ticks) {
	    //console.log("Ticks", ticks);
	    socket.emit('message', {
		text: ticks
		});
	}

	function subscribe() {
	    var items = [256265, 53357575, 53325575, 53297415, 53315591];
	    ticker.subscribe(items);
	    ticker.setMode(ticker.modeFull, items);
	}
	*///==================================

});


http.listen(PORT, function(){
	console.log('Server started!');
});




