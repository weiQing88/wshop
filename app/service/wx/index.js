const Service = require('egg').Service;
const ms = require('ms');

class HomeService extends Service{
      async index(){
        const { ctx, service, config, logger, app  } = this;
            let convertImgs = ( row, key ) => {
                if( ctx.util.isValid( row[key]  ) ){ 
                    let url = row[key].split(',')[0];
                        row[key] = url.replace(/\\/g,"\/") ;  
                }
            };

           try{
              let goods = await ctx.model.WshopGoods.findAll({
                                                    where : { is_recommend : 1 }, 
                                                    offset : 0, 
                                                    limit : 6,
                                                    attributes : ['category_name','id','goods_name','promotion_img','goods_img'] 
                                            });

              let category = await ctx.model.WshopCategory.findAll();

              goods = ctx.util.transformUrl( goods ,['goods_img', 'promotion_img' ] );
              category =  ctx.util.transformUrl( category , 'img_url');
              return { status_code : config.statuscode.success, data : { goods, category }, message : 'ok' }
           }catch(err){
              console.log('err', err );
              return { status_code : config.statuscode.failure,  message : '获取失败1289' }
           }
      }

    async login(){
        const { ctx, service, config, logger, app  } = this;
        let res = await app.curl('https://api.weixin.qq.com/sns/jscode2session',{
               method : 'GET',
               data : {
                appid : 'wx8003c4b4ffcf7125',
                secret : 'c0a2b4993d8dbc5d3561c9a8e1f4a0d0',
                js_code : ctx.request.body.code,
                grant_type: 'authorization_code'
              },
              dataType  : 'json'
         });

         if( res.status == 200 ){
             let { session_key,  openid } =  res.data;
             let { avatarUrl, gender, nickName, } = ctx.request.body;
             let param = {
                    username : nickName,
                    nickname: nickName,
                    avatar : avatarUrl,
                    gender : gender == 1 ? '男' : '女',
                    weixin_openid : openid,
                   // register_time : ctx.util.currentDate(),
                    last_login_time : ctx.util.currentDate(),
                    last_login_ip : ctx.util.getClientIP( ctx.req ),
                    register_ip : ctx.util.getClientIP( ctx.req ),
                    user_id : ctx.util.uidGenerator()
             }
                
             try{
                 let res =  await ctx.model.WshopUser.findOrCreate({ where : {  weixin_openid : openid }, defaults : param });
                // 生产token
                let token = app.jwt.sign({ openid },app.config.jwt.secret, { expiresIn: ms('1d')  });
                    // 保存已登录用户信息到 session
                   await app.redis.set('wxuserid',  openid);
                         app.redis.expire('wxuserid', 86400); // 设置 1 天的过期时间

                  return { status_code : config.statuscode.success, data : res[0], token,  message : 'ok' }
             }catch(err){
                   console.log('err-----000---', err );
                   return { status_code : config.statuscode.failure,  message : '登录失败' } 
             }

         }else{
             return { status_code : config.statuscode.failure,  message : '请求微信服务失败' }
         }
    }

    async detail(){
        const { ctx, service, config, logger, app  } = this;
            try{
                let res = await ctx.model.WshopGoods.findOne({ where :  ctx.query });
                if(  res.category_attrs ){
                     res.category_attrs = await res.sequelize.WshopAttribution.findAll({  where : {  attr_id : res.category_attrs.split(',') } });
                     res.category_attrs.forEach( itm => { itm.attr_value = itm.attr_value.split(',')  })
                };
                    res = ctx.util.transformUrl( [ res ] ,['goods_img', 'promotion_img' ], true );
                return { status_code : config.statuscode.success, data : res[0],  message : 'ok' }
            }catch( err ){
                 return { status_code : config.statuscode.failure,  message : '获取失败' }
            }
    }

   async user(){
       const { ctx, service, config, logger, app  } = this,
             Op =  app.Sequelize.Op;
        try{
            let param = { expired : { [ Op.gt ] :  Date.parse( new Date() )  }, ...ctx.query };
            let cart = await ctx.model.WshopCart.count({ where : param });
                
            return { status_code : config.statuscode.success, data : {  cart  },   message : 'ok' }
        }catch(err){
            return { status_code : config.statuscode.failure,  message : '获取失败' }
        }

   }

}


module.exports = HomeService;