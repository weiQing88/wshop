const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken');


function verify(token, app) {
       try{
            let result = app.jwt.verify( token, app.config.jwt.secret ) || {};
            let {exp, iat} = result, 
                current = Math.floor(Date.now() / 1000);
                if (current <= exp) res = result.data || {};
        }catch( err ){
            console.log( err );
        }
     return res
   
}

module.exports = ( app,options ) => {
    return async function verifyToken( ctx, next ){
     // **** !!!!!获取前端或以其他方式设置的cookie需要设置signed: false属性，避免对它做验签导致获取不到 cookie 的值。!!!!*****
        let token = ctx.cookies.get('wshopLoginToken',{ httpOnly: false, signed: false });
          if( token ){
            let rst = verify( token, app );

             console.log(  rst )

            await next();

          }else{
            ctx.body = {
                status_code: 401,
                message: '您还没有登录，请登陆后再进行操作'
            }
            ctx.status = 401;
          }
         //
    }
}



const tet  = (app,options) => {

    return async function sverifyToken(ctx, next) {
        //获取token
        let token = ctx.cookies.get('token')
        // 获取前端或以其他方式设置的cookie需要设置signed: false属性，避免对它做验签导致获取不到 cookie 的值。
        let username = ctx.cookies.get('username', {signed: false})
        //验证token是否为空
        if (token){
            let result = eeverifyToken(token) //解密token
            let {_id} = result //检查是否有用户_id
            //验证客户端token是否合法
            if (_id) {
                let redis_token = await app.redis.get(username) // 获取redis中的token
                //验证是否为最新的token
                if (token === redis_token) {
                    await next();
                }else{
                    // 如果不是最新token，则代表用户在另一个机器上进行操作，需要用户重新登录保存最新token
                    ctx.body = {
                        status: 1,
                        message: '您的账号已在其他机器保持登录，如果继续将清除其他机器的登录状态'
                    }
                }
            }else{
                // 如果token不合法，则代表客户端token已经过期或者不合法（伪造token）
                ctx.body = {
                    status: 1,
                    message: '您的登录状态已过期，请重新登录'
                }
            }
        }else{
            // 如果token为空，则代表客户没有登录
            ctx.body = {
                status: 1,
                message: '您还没有登录，请登陆后再进行操作'
            }
        }
    };
}
// 验证token的方法，传入token，解密，验证是否过期
function eeverifyToken(token) {
    let cert = fs.readFileSync(path.join(__dirname, '../public/rsa_public_key.pem'));//公钥
    let res = ''
    try {
        let result = jwt.verify(token, cert, {algorithms: ['RS256']}) || {};
        let {exp, iat} = result, current = Math.floor(Date.now() / 1000);
        if (current <= exp) {
            res = result.data || {};
        }
    } catch (e) {
        console.log(e);
    }
    return res;
}
// 生成公钥方法同上



// // 在路由中使用中间件
// module.exports = app => {
//     const { router, controller } = app;
//     const UserInterceptor = app.middleware.userInterceptor({}, app);
//     router.get('/users/getcode', UserInterceptor, controller.users.getcode);
// };

