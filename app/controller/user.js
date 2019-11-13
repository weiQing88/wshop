'use strict';
const ms = require('ms');
const Controller = require('egg').Controller;

class UserController extends Controller {
     async login (){
          const { ctx, service } = this;

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

          //  ctx.request.body 获取 post 参数

         //  let res = await service.user.login( ctx.request.body  );

          // 设置响应类型
          //  ctx.type = 'text/plain; charset=utf-8'; or ctx.set('Content-Type', 'text/html')

           ctx.body = {
               state_code : 200,
               message : 'success',
               data : ctx.request.body,
               session: ctx.session.login_code,
               captchaExpire : ctx.cookies.get('captchaExpire'),
           };
           ctx.status = 200;
      }

    async captcha(){
        const { ctx, service, } = this;
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

}

module.exports = UserController;
