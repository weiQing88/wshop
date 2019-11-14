'use strict';
const ms = require('ms');
const Controller = require('egg').Controller;

class UserController extends Controller {
     async login (){
        const { ctx, service, config, logger, app  } = this;

          const paramRule = {
               captcha : {
                   type : 'string',
                   required: true,
               },
               name : {
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
               }
              
          };

          ctx.validate( paramRule );

          // 把用户数据保存到 cookies 和 session中【 redis 】


           console.log( 'ctx.request.body ',  ctx.util.secret( ctx.request.body.password, true )  );


          //  ctx.request.body 获取 post 参数

         //  let res = await service.user.login( ctx.request.body  );

          // 设置响应类型
          //  ctx.type = 'text/plain; charset=utf-8'; or ctx.set('Content-Type', 'text/html')

           ctx.body = {
               state_code : 200,
               message : 'success',
            //    data : ctx.request.body,
            //    session: ctx.session.login_code,
            //    captchaExpire : ctx.cookies.get('captchaExpire'),
           };
           ctx.status = 200;
      }

    async captcha(){
        const { ctx, service, config, logger, app  } = this;
           let { type } = ctx.query;  // 获取 get 参数
         let cap = service.common.captcha();
             // 设置验证码过期时间
              ctx.cookies.set('captchaExpire', Date.parse( new Date() ) , { maxAge : ms('2m') });
          if( type == 'login' ){
               ctx.session.login_code = cap.text;
          }else if( type == 'register' ){
               ctx.session.register_code  = cap.text;
          }
           ctx.body = {
               state_code : 200,
               message : 'success',
               data :  cap.svgNode
           }
           ctx.status = 200;
          // ctx.type = 'text/xml';
          // 
            
      }

    async mcaptcha(){  // 手机短信验证码
         const { ctx, service, config, logger, app  } = this;
         let res = await service.common.mcaptcha( ctx.query );
         let { type } = ctx.query;  // 获取 get 参数
          // 设置验证码过期时间
          ctx.cookies.set('mcaptchaExpire', Date.parse( new Date() ) , { maxAge : ms('2m') });
          if( type == 'login' ){
                ctx.session.login_mcode = res.RemainPoint;
          }else if( type == 'register' ){
                ctx.session.register_mcode  = res.RemainPoint;
          }

         ctx.body = {
               state_code : 200,
               message : 'ok',
               data : res,
         }
    
    }

    async register(){
          const { ctx, service, config, logger, app  } = this;
            ctx.validate({
                        mobile : {
                            required : true,
                            type : 'string'
                        },
                        username : {
                            required : true,
                            type : 'string'
                    },
                    password : {
                        required : true,
                        type : 'string'
                    },
                    captcha : {
                        required : true,
                        type : 'string'
                    },
                    email : {
                        type : 'email'
                    }
                });

            let res = await service.user.register( ctx.request.body  );

            ctx.body = {
                  state_code : 200,
                  message : '注册成功',
                  data : res
            };
           ctx.status = 200;

    }

}

module.exports = UserController;
