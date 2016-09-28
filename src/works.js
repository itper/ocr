require("babel-polyfill");
var web = require('./servers/web');
web.listen(80,'0.0.0.0');