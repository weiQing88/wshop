const Service = require('egg').Service;
const ms = require('ms');
const fs = require('fs');
const path = require('path');
class UserService extends Service{


       async logout(){
          let { ctx, app, config, logger, service } = this;
             let param = ctx.request.body;
             let user = await app.redis.get('user'); //  ctx.session.user || {};
                 user = JSON.parse( user );
             if( param.mobile == user.mobile && param.user_id == user.user_id ){
                 /******** 清除 session *********/
                  // ctx.session.user = null;
                  await app.redis.del('user');
                 return { status_code : config.statuscode.success, message : '成功退出' }
             }else{
                 return { status_code : config.statuscode.failure, message : '退出失败'  }
             }
       }


       async login(){
              let { ctx, app, config, logger, service } = this;
              let result = {};
              /**
               *  1、验证 图片验证码是否过期/一致
               *  2、验证密码、账号/手机号 是否与数据库的一致
               *  3、jwt生成加密token  【 过期时间统一为 1 天 】
               *  4、保存用户信息到redis 【 过期时间统一为 1 天 】
               */
           let {  mobile, password, remember, captcha } = ctx.request.body;

           let login_code = await app.redis.get('login_code');

            if( login_code ){ 

               console.log('captcha from body',  captcha );
               console.log('login_code from redis',  login_code );

                 if( captcha == login_code ){  // ctx.session.login_code
                            try{
                                   let res = await ctx.sql('WshopAdmin', 'findOne',{ where : { mobile } });
                                   if( ctx.util.isValid( res ) ){
                                          let bool = ctx.util.tocheck( ctx.util.secret( password, 'decrypt' ),  res.dataValues.password );
                                          if( bool ){
                                                 let { username, mobile, avatar, admin_role, user_id } = res.dataValues;
                                                 let maxAge = remember == '1' ? ms('30d') : ms('1d');
                         
                                          // 生成token
                                          let token = app.jwt.sign({ username, mobile, user_id },app.config.jwt.secret, { expiresIn: maxAge  });
                                                 result.token = token;
                                                 // 由于浏览器和其他客户端实现的不确定性，为了保证 Cookie 可以写入成功，通过 base64 编码或者其他形式 encode 。
                                                 result.userinfo = { username, mobile, avatar, admin_role : encodeURIComponent( admin_role ) , user_id };
                                                 result.status_code = config.statuscode.success;
                                                 result.message = '登录成功';

                            
                                                 /**  ***  由客户端保持 cookie   start ****  */
                                                // 保存到客户端浏览器的cookie中; 
                                                 // ctx.cookies.set('wshopLoginToken', token,{
                                                 //        maxAge,
                                                 //        path: '/',
                                                 //        domain: 'localhost',
                                                 //        httpOnly: false,
                                                 //        signed: false,
                                                 // });
                                   
                                                 // ctx.cookies.set('userInfo',JSON.stringify( result.userinfo ),{
                                                 //        maxAge,
                                                 //        path: '/',
                                                 //        domain: 'localhost',
                                                 //        httpOnly: false,
                                                 //        signed: false,
                                                 //    });
                                                /**  ***  由客户端保持 cookie   end ****  */

                                                  result.expired = remember == '1' ? 30 : 1;

                                                 // 保存已登录用户信息到 
                                                  app.redis.set('user', JSON.stringify( { username, mobile, user_id } ))
                                                    // 如果用户勾选了 `记住我`，设置 30 天的过期时间
                                                  app.redis.expire('user', remember == '1' ?  30 * 24 * 60 * 60 : 1 * 24 * 60 * 60 );
                                                  
                                                 // 保存已登录用户信息到 session
                                                 // ctx.session.user = { username, mobile, user_id };
                                                 // 如果用户勾选了 `记住我`，设置 30 天的过期时间
                                                 // ctx.session.maxAge = maxAge;



       
                                          }else{
                                                 result.status_code = config.statuscode.failure;
                                                 result.message = '密码不正确';  
                                          }
                                   }else{
                                          result.status_code = config.statuscode.failure;
                                          result.message = '该账号不存在';
                                   }
       
                            }catch(err){
                                   console.log('err----err', err );
                                   result.status_code = config.statuscode.failure;
                                   result.message = '登录失败'; 
                            }
                          
                  }else{
                     result.status_code = config.statuscode.failure;
                     result.message = '验证码不正确';
                  }

            }else{
                     app.redis.del('login_code'); 
                     result.status_code = config.statuscode.failure;
                     result.message = '验证码已过期';
            }

             return result
     

       }




       async register(){
         var { ctx, app, config, logger, service } = this,
              result = {},
              param = {};

                /**
                 *  1、验证是否有重复手机号  ==> ok
                 * 2、验证短信验证码是否正确或过期 ==> ok
                 * 3、创建 user_id  ==> ok
                 * 4、获取用户 IP  ==> ok
                 * 5、用户创建时间  ==> ok
                 * 6、上传头像
                 * 
              */
             if( ctx.util.isValid( ctx.request.body ) ){ // 无头像上传
                    param = ctx.request.body;
             }else{
                     // 上传头像
                var rst = await service.common.uploadFile('avatar');
                     if( rst.state ){
                        param = rst.fields;
                        param.avatar = rst.url;
                     }else{
                          return {
                            status_code : config.statuscode.failure,
                            message : '头像上传失败'
                          }  
                     }
             }

               // 校验参数
               try{
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
                                   }, param );
                    }catch( error ){
                            logger.warn( error ); 
                      return {
                              state_code : config.statuscode.failure,
                              message : '参数错误'
                        }      
            }


            // 如果短信验证码没过期
            let register_mcode = await app.redis.get('register_mcode');
            if( register_mcode ){ 
                 if( param.captcha ==  register_mcode ){ // ctx.session.register_mcode 
                            param.last_login_ip = ctx.util.getClientIP( ctx.req ) || '127.0.0.1';
                            param.add_time = ctx.util.currentDate();
                            param.user_id = ctx.util.uidGenerator();
                            param.admin_role = '普通管理员'; // 默认分配是普通管理员
                            param.password = ctx.util.tohash(ctx.util.secret( param.password, 'decrypt' ));  

                        let user =  await ctx.sql('WshopAdmin','findOne', {
                                                 where : { mobile : param.mobile,username : param.username }
                                          });   
                            
                        if( ctx.util.isValid( user ) ){ // 用户名或手机号已存在
                                   result.status_code = config.statuscode.failure;
                                   result.message = '该手机号已被注册';
                           
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
                  app.redis.del('register_mcode');  
                  result.status_code = config.statuscode.failure;
                  result.message = '验证码已过期';
            }

            return result

         
       }

}


module.exports = UserService;