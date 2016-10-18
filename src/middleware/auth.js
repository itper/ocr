const publicResource = [
    'POST:/user/login',
    'GET:/user/logout'
];
export default async function(ctx,next){
    if(publicResource.indexOf(ctx.req.method+':'+ctx.req.url)>-1){
        await next();
        return;
    }
    let user;
    if(ctx.session) {
        user = ctx.session.user;
    }
    if(!user){
        ctx.body = {
            code:2,
            msg:'未登录'
        };
        return;
    }
    if(user.type===3){
        await next();
    }else{
        ctx.body = {
            code:3,
            msg:"无权限"
        };
    }
}