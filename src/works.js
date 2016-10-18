require("babel-polyfill");
var web = require('./servers/web');
web.listen(60006,'0.0.0.0');