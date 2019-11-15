const Service = require('egg').Service;

class UserService extends Service{
       async login( param ){
              let { ctx, app, config, logger, service } = this;
              let result = {};

              /**
               *  1、验证 图片验证码是否过期/一致
               *  2、验证密码、账号/手机号 是否与数据库的一致
               *  3、jwt 加密保存 cookies/session 
               */

              let {  mobile, password } = param;

            //  let bool =  ctx.util.tocheck( password, hash );

            if( ctx.cookies.get('captchaExpire') ){ 
                 if( param.captcha == ctx.session.login_code ){
                                
                            let res = await ctx.sql('WshopAdmin', 'findOne',{ where : { mobile } });
                            if( ctx.util.isValid( res ) ){
                                   let bool = ctx.util.tocheck( password,  res.dataValues.password );
                                   if( bool ){
                                          // jwt
                                          // 生成t oken ...
                                          result.status_code = config.statuscode.success;
                                          result.message = '登录成功'
                                   }else{
                                          result.status_code = config.statuscode.failure;
                                          result.message = '密码不正确';  
                                   }

                                   console.log( 'bool', bool )

                            }else{
                                   result.status_code = config.statuscode.failure;
                                   result.message = '该账号不存在';
                            }
                            

                  }else{
                     result.status_code = config.statuscode.failure;
                     result.message = '验证码不正确';
                  }

            }else{
                     ctx.session.login_code  = null;    
                     result.status_code = config.statuscode.failure;
                     result.message = '验证码已过期';
            }

             return result
     

       }




       async register( param ){
         let { ctx, app, config, logger, service } = this;
         let result = {};
                /**
                 *  1、验证是否有重复手机号  ==> ok
                 * 2、验证短信验证码是否正确或过期 ==> ok
                 * 3、创建 user_id  ==> ok
                 * 4、获取用户 IP  ==> ok
                 * 5、用户创建时间  ==> ok
                 * 
              */
            // 如果短信验证码没过期
            if( ctx.cookies.get('mcaptchaExpire') ){ 
                 if( param.captcha ==  ctx.session.register_mcode ){
                        param.last_login_ip = ctx.util.getClientIP( ctx.req ) || '127.0.0.1';
                        param.add_time = ctx.util.currentDate();
                        param.user_id = ctx.util.uidGenerator();
                        param.admin_role = JSON.stringify( ['user'] );
                        param.password = ctx.util.tohash( param.password );  

                        let user =  await ctx.sql('WshopAdmin','findOne', {
                                                 where : { mobile : param.mobile,username : param.username }
                                          });   
                            
                        if( ctx.util.isValid( user ) ){ // 用户名或手机号已存在
                                   result.status_code = config.statuscode.failure;
                                   result.message = '该用户名/手机号已被注册';
                           
                        }else{  // 可以注册

                            let res = await ctx.sql('WshopAdmin','create', param );
                            if( ctx.util.isValid( res ) ){
                                   result.status_code = config.statuscode.success ;
                                   result.message = '注册成功';  
                            }else{
                                   result.status_code = config.statuscode.failure;
                                   result.message = '注册失败';  
                            }

                        }

                 }else{
                     result.status_code = config.statuscode.failure;
                        result.message = '验证码不正确';

                 } 
            }else{
                  ctx.session.register_mcode  = null;    
                  result.status_code = config.statuscode.failure;
                  result.message = '验证码已过期';
            }

            return result

         
       }

}


module.exports = UserService;