const Service = require('egg').Service;
const ms = require('ms');
const fs = require('fs');
const path = require('path');
class UserService extends Service{


       async logout(){
          let { ctx, app, config, logger, service } = this;
             let param = ctx.request.body;
             let user = await app.redis.get(`user_${ param.user_id }`); 
             if( user ){
                  await app.redis.del(`user_${ param.user_id }`);
                 return { status_code : config.statuscode.success, message : '成功退出' }
             }else{
                 return { status_code : config.statuscode.failure, message : '退出失败'  }
             }
       }


       async login(){
              let { ctx, app, config, logger, service } = this;
              let result = {};

           let {  mobile, password, remember, captcha } = ctx.request.body;
           let login_code = await app.redis.get('login_code');
         

            if( login_code ){ 

                 if( captcha == login_code ){  // ctx.session.login_code
                            try{
                                   let res = await ctx.sql('WshopAdmin', 'findOne',{ where : { mobile } });
                                
                                   if( ctx.util.isValid( res ) ){
                                          let usr = await app.redis.get(`user_${ res.user_id || '' }`);
                                          if( usr ) return {
                                                 status_code : config.statuscode.failure,
                                                 message : '您已在别处登录！'
                                          };

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

                            
                                                  result.expired = remember == '1' ? 30 : 1;

                                                 // 保存已登录用户信息到 
                                                  app.redis.set(`user_${ user_id }`,  JSON.stringify( { username, mobile, user_id } ))
                                                    // 如果用户勾选了 `记住我`，设置 30 天的过期时间
                                                  app.redis.expire(`user_${ user_id }`, remember == '1' ?  30 * 24 * 60 * 60 : 1 * 24 * 60 * 60 );
                                                  
                                             
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
