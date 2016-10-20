var SessionStore;
var Store = require('koa-session2').Store;
SessionStore = new Store();
SessionStore.key = "ocr-session";
module.exports = SessionStore;