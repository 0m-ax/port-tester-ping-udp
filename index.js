var host = "0.0.0.0", port = 7777;
var dgram = require( "dgram" );
var server = dgram.createSocket( "udp4" );
server.on( "message", function( msg, rinfo ) {
    var message = new Buffer("pong\r\n");
    server.send( message, 0, message.length, rinfo.port, rinfo.address );
});
server.bind(port, host);