'use strict';
const ms = require('ms');
const Controller = require('egg').Controller;

class UserController extends Controller {
    async logout(){
        const { ctx, service, config, logger, app  } = this;
        try{
          ctx.validate({
               username : { type : 'string', required : true },
               mobile :{ type : 'string',required : true },
               avatar :{ type : 'string' },
               admin_role : { type : 'string' },
               user_id :{ type : 'string',required : true },
          }, ctx.request.body );

        }catch( error ){
          ctx.body = {
               status_code : config.statuscode.failure,
                message : '参数错误'
          }
           return false;
        }
       ctx.body = await service.user.logout();
         
    }

     async login (){
        const { ctx, service, config, logger, app  } = this;
          try{
               ctx.validate( {
                         captcha : {
                         type : 'string',
                         required: true,
                         },
                         password : {
                              type : 'string',
                              required: true,
                         },
                         remember : {
                              type: 'string',
                              required : false,
                         },
                         mobile : {
                              required : true,
                              type : 'string'
                         }
                    
                    }, ctx.request.body );
          }catch( error ){
               ctx.body = {
                    status_code : config.statuscode.failure,
                     message : '参数错误'
               }
             return false;
          }
          // 设置响应类型
          //  ctx.type = 'text/plain; charset=utf-8'; or ctx.set('Content-Type', 'text/html')
          //  ctx.request.body 获取 post 参数
           ctx.body = await service.user.login();
      }

    async captcha(){
        const { ctx, service, config, logger, app  } = this;
           let { type } = ctx.query;  // 获取 get 参数
         let cap = service.common.captcha();
             // 设置验证码过期时间
              ctx.cookies.set('captchaExpire', Date.parse( new Date() ) , { maxAge : ms('2m') });
          if( type == 'login' ){
                app.redis.set('login_code', cap.text.toLowerCase());
                app.redis.expire('login_code',  120); // 设定2秒过期

              // ctx.session.login_code = cap.text.toLowerCase();
          }else if( type == 'register' ){
               app.redis.set('login_code', cap.text.toLowerCase());
               app.redis.expire('login_code',  120); // 设定2秒过期

              // ctx.session.register_code  = cap.text.toLowerCase();
          }
           ctx.body = {
               status_code : config.statuscode.success,
               message : 'success',
               data :  cap.svgNode
           }
          // ctx.type = 'text/xml';
          
            
      }

    async mcaptcha(){  // 手机短信验证码
         const { ctx, service, config, logger, app  } = this;
         let res = await service.common.mcaptcha( ctx.query );
         let { type } = ctx.query;  // 获取 get 参数
          // 设置验证码过期时间
          ctx.cookies.set('mcaptchaExpire', Date.parse( new Date() ) , { maxAge : ms('2m') });
          if( type == 'login' ){
               app.redis.set('login_mcode', res.RemainPoint );
               app.redis.expire('login_mcode',  120); // 设定2秒过期

              //  ctx.session.login_mcode = res.RemainPoint;

          }else if( type == 'register' ){
               app.redis.set('register_mcode', res.RemainPoint );
               app.redis.expire('register_mcode',  120); // 设定2秒过期

               // ctx.session.register_mcode  = res.RemainPoint;
          }

         ctx.body = {
               status_code : config.statuscode.success,
               test : true,
               message : 'ok',
               data : res,
         }
    
    }

    async register(){
        const { ctx, service, config, logger, app  } = this;
          ctx.body = await service.user.register();
    }

}

module.exports = UserController;
