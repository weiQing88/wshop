const Service = require('egg').Service;

class UserService extends Service{
       async login( param ){
         console.log(  'param' , param   )
       }

       async register( param ){
         let { ctx, app, config, logger, service } = this;
         let result = {};
                /**
                 *  1、验证是否有重复手机号  ==> ok
                 * 2、验证短信验证码是否正确或过期
                 * 3、创建 user_id  ==> ok
                 * 4、获取用户 IP  ==> ok
                 * 5、用户创建时间  ==> ok
                 * 
              */


            // console.log( 'ctx.model.wshop_admin ',  )

            ctx.model.WshopAdmin 

            // 如果短信验证码没过期
            if( ctx.cookies.get('mcaptchaExpire') ){ 
                 if( param.captcha ==  ctx.session.register_mcode ){
                        param.last_login_ip = ctx.util.getClientIP( ctx.req ) || '127.0.0.1';
                        param.add_time = ctx.util.currentDate();
                        param.user_id = ctx.util.uidGenerator();
                        param.admin_role = ['user'];
                        param.password = ctx.util.tohash( param.password );  

                    

                 }else{
                        result.status = false;
                        result.message = '验证码不正确！';

                 } 
            }else{
                  ctx.session.register_mcode  = null;    
                  result.status = false;
                  result.message = '验证码已过期！';
            }

            return result

         
       }

}


module.exports = UserService;