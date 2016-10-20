var Dispatch = require('../global/signDispatch');
var SessionStore = require('../global/sessionStore');
var SIGN_SOCKET ='sign socket';
exports.connect = function(server){
    new Server(server);
};

function Server(server){
    this.io = require('socket.io')(server);
    this.io.use(valid);
    this.io.on('connect',(socket)=>{
        this.assign(socket);
    });
    Dispatch.on('sign-valid',(data)=>{
        this.io.to(SIGN_SOCKET).emit('sign-valid',data);
    });

};
Server.prototype.assign = function(socket){
    socket.join(SIGN_SOCKET);
    console.log('join');
    socket.on('event', (data)=>{
        console.log(this.io.rooms);
    });
    socket.on('disconnect',function(){
        socket.leave(SIGN_SOCKET);
        console.log('leave');
    });
};

async function valid(socket,next){
    getSession(socket.request.headers)
        .then(function(session){
            var user = session.user;
            console.log(user);
            if(user){
                next();
            }else{
                next(new Error('Authentication error'));
            }
        });
}
function parseCookie(cookieString){
    try{
        var kv = cookieString.split(';');
        var cookies = {};
        for(var i=0;i<kv.length;i++){
            var value = kv[i].split('=');
            cookies[value[0].replace(/\s+/g,'')] = value[1];
        }
        return cookies;
    }catch(e){
        return {};
    }
}
async function getSession(headers){
    return new Promise(function(resolve){
        try{
            var ssid = parseCookie(headers.cookie)[SessionStore.key];
            SessionStore.get(ssid).then(function(v){
                resolve(v);
            });
        }catch(e){
            resolve(v);
        }
    });

}