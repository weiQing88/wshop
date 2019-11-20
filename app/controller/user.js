'use strict';
const ms = require('ms');
const Controller = require('egg').Controller;

class UserController extends Controller {

    async logout(){
        const { ctx, service, config, logger, app  } = this;
        ctx.body = await service.user.logout( ctx.request.body  );
        ctx.status = 200;
    }

     async login (){
        const { ctx, service, config, logger, app  } = this;
          const paramRule = {
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
              
          };
          ctx.validate( paramRule );
          // 设置响应类型
          //  ctx.type = 'text/plain; charset=utf-8'; or ctx.set('Content-Type', 'text/html')
          //  ctx.request.body 获取 post 参数
           ctx.body = await service.user.login( ctx.request.body  );
           ctx.status = 200;

      }

    async captcha(){
        const { ctx, service, config, logger, app  } = this;
           let { type } = ctx.query;  // 获取 get 参数
         let cap = service.common.captcha();
             // 设置验证码过期时间
              ctx.cookies.set('captchaExpire', Date.parse( new Date() ) , { maxAge : ms('2m') });
          if( type == 'login' ){
               ctx.session.login_code = cap.text.toLowerCase();
          }else if( type == 'register' ){
               ctx.session.register_code  = cap.text.toLowerCase();
          }
           ctx.body = {
               state_code : 200,
               message : 'success',
               data :  cap.svgNode
           }
           ctx.status = 200;
          // ctx.type = 'text/xml';
          
            
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

        //  console.log('mcaptcha controller res', res)
         ctx.body = {
               state_code : 200,
               message : 'ok',
               data : res,
         }
    
    }

    async register(){
          const { ctx, service, config, logger, app  } = this;

            // ctx.validate({
            //             mobile : {
            //                 required : true,
            //                 type : 'string'
            //             },
            //             username : {
            //                 required : true,
            //                 type : 'string'
            //         },
            //         password : {
            //             required : true,
            //             type : 'string'
            //         },
            //         captcha : {
            //             required : true,
            //             type : 'string'
            //         },
            //         email : {
            //             type : 'email'
            //         }
            //     });

         //  ctx.body = await service.user.register( ctx.request.body  );

          await service.user.register();

           ctx.body = {
                state_code : 406,
                message : '暂时无法注册'
            }

        

    }

}

module.exports = UserController;
