if(typeof _babelPolyfill==='undefined'  ||  !_babelPolyfill){
    require("babel-polyfill");
}
var socket = require('./socket-server/socket');
var web = require('./servers/web');
var server = require('http').createServer(web.callback());
socket.connect(server);
server.listen(60006,'0.0.0.0');