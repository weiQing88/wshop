const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken');

// 参考 ：https://blog.csdn.net/qq_39081974/article/details/81085717

function verify(token, app) {
    let res = null;
       try{
            let result = app.jwt.verify( token, app.config.jwt.secret ) || {};
            let {exp, iat} = result, 
                current = Math.floor(Date.now() / 1000);
                if (current <= exp) res = result || {};
        }catch( err ){
            console.log( err );
        }
     return res
}

module.exports = ( app,options = {} ) => {
    return async function verifyToken( ctx, next ){
     // **** !!!!!获取前端或以其他方式设置的cookie需要设置signed: false属性，避免对它做验签导致获取不到 cookie 的值。!!!!*****
     //  ctx.cookies.get( tokenName ,{ httpOnly: false, signed: false }) 
        let { tokenName = 'wshopLoginToken' } = options;
        let token = tokenName == 'wshopLoginToken' 
                            ? ctx.header.authorization.replace('Bearer ', '') 
                            : ctx.header.wxtoken;
          if( token ){
                let rst = verify( token, app );

                if( ctx.util.isValid( rst ) ){
                     // 存在 redis , 可做新旧对比。【 有可能用户在多处登录 】
                     let flag = true;
                     let wxuserid = await app.redis.get('wxuserid');
                     let user = await app.redis.get('user');
                         user = JSON.parse( user );

                    if( tokenName == 'wshopLoginToken' ){
                        rst.user_id == user.user_id ? '' : flag = false;
                    }else if( tokenName == 'wxtoken' ){
                        rst.openid == wxuserid ? '' : flag = false;
                    }

                    if( flag ){
                        await next();  // 只有成功后，才会执行这一步。
                    }else{
                        ctx.body = {
                            status_code: 401,
                            message: '您的登录状态已过期，请重新登录'
                        }
                        ctx.status = 401;   
                    }

                }else{
                    // 如果token不合法，则代表客户端token已经过期或者不合法（伪造token）
                    ctx.body = {
                        status_code: 401,
                        message: '您的登录状态已过期，请重新登录'
                    }
                    ctx.status = 401;   
                }

          }else{
            ctx.body = {
                status_code: 401,
                message: '您还没有登录，请登陆后再进行操作'
            }
            ctx.status = 401;
          }
    }
}

