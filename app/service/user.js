const Service = require('egg').Service;
const ms = require('ms');
const fs = require('fs');
const path = require('path');
class UserService extends Service{
       async logout( param ){
          let { ctx, app, config, logger, service } = this;
              console.log( 'ctx.session.user', ctx.session.user )
             if( param.mobile == ctx.session.user.mobile && param.user_id == ctx.session.user.user_id ){
                 //清除 session 
                 ctx.session.user = null;
                 return {
                      status_code : config.statuscode.success,
                      message : '成功退出'
                 }
             }else{
                 return {
                       status_code : config.statuscode.failure,
                       message : '退出失败'
                 }
             }
       }

       async login( param ){
              let { ctx, app, config, logger, service } = this;
              let result = {};
              /**
               *  1、验证 图片验证码是否过期/一致
               *  2、验证密码、账号/手机号 是否与数据库的一致
               *  3、jwt生成加密token
               *  4、session保存用户信息；【 保存本地 session 或保存到redis 】
               */
          let {  mobile, password, remember } = param;
            if( ctx.cookies.get('captchaExpire') ){ 
                 if( param.captcha == ctx.session.login_code ){
                            let res = await ctx.sql('WshopAdmin', 'findOne',{ where : { mobile } });
                            if( ctx.util.isValid( res ) ){
                                   let bool = ctx.util.tocheck(  ctx.util.secret( password, 'decrypt' ),  res.dataValues.password );
                                   if( bool ){
                                          let { username, mobile, avatar, admin_role, user_id } = res.dataValues;
                                          // 生成token
                                          result.token = app.jwt.sign({  username,mobile  }, app.config.jwt.secret );
                                          result.userinfo = {username, mobile, avatar, admin_role : JSON.parse( admin_role ), user_id };
                                          result.status_code = config.statuscode.success;
                                          result.message = '登录成功';
                                          // 保持已登录用户信息到 session
                                          console.log('login ',  { username, mobile, user_id } )
                                          ctx.session.user = { username, mobile, user_id };
                                          // 如果用户勾选了 `记住我`，设置 30 天的过期时间
                                          if( remember == '1' ) ctx.session.maxAge = ms('30d');

                                   }else{
                                          result.status_code = config.statuscode.failure;
                                          result.message = '密码不正确';  
                                   }
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




       async register(){
         var { ctx, app, config, logger, service } = this,
              result = {},
              param = {},
              ctype = 'normal',
              stream;

                /**
                 *  1、验证是否有重复手机号  ==> ok
                 * 2、验证短信验证码是否正确或过期 ==> ok
                 * 3、创建 user_id  ==> ok
                 * 4、获取用户 IP  ==> ok
                 * 5、用户创建时间  ==> ok
                 * 6、上传头像
                 * 
              */



            




              console.log('---------------------start------------------------' );
            
              console.log('--------------------end-------------------------' );
       
             if( ctx.util.isValid( ctx.request.body ) ){ // 无图片上传
                    param = ctx.request.body;
             }else{
                    stream = await ctx.getFileStream();
                    param = stream.fields;
                    ctype = 'form-data';
                 console.log('stream service',  stream )
             }


            // 如果短信验证码没过期
            if( ctx.cookies.get('mcaptchaExpire') ){ 
                 if( param.captcha ==  ctx.session.register_mcode ){
                            param.last_login_ip = ctx.util.getClientIP( ctx.req ) || '127.0.0.1';
                            param.add_time = ctx.util.currentDate();
                            param.user_id = ctx.util.uidGenerator();
                            param.admin_role = JSON.stringify( ['user'] );
                            param.password = ctx.util.tohash(ctx.util.secret( param.password, 'decrypt' ));  

                         if( ctype == 'form-data' ){ // 上传文件

                              console.log( 'service.common', service.common )
                                 
                         }
                         
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