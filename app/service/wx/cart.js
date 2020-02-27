const Service = require('egg').Service;
const ms = require('ms');

class CartService extends Service{
    async fetCart(){
        const { ctx, service, config, logger, app  } = this;
        try{
             // 操作对象
            let Op =  app.Sequelize.Op;
            let res = await ctx.model.WshopCart.findAll({ where : {   expired : { [ Op.gt ] :  Date.parse( new Date() )  } } });
                res.forEach( item => {
                       if( item.goods_attrs ) item.goods_attrs = item.goods_attrs.split(',');
                        item.shop_price = Number( item.shop_price );
                });
             return { status_code : config.statuscode.success,data : res,  message : 'ok' }
        }catch(err){
            console.log('err', err)
            return { status_code : config.statuscode.failure,  message : '获取失败' }
        }
    }
    async add(){
        const { ctx, service, config, logger, app  } = this;
        // *** 加入购物车的商品过期时间为 【 30分钟 】 或 【 3小时 】*****
        // 通过定时任务删除购物车里过期的订单
         try{
            let param = ctx.request.body;
                param.expired = Date.parse( new Date(new Date().getTime() + 3 * 60 * 60 * 1000) ); // 0.5 => 半小时【 30分钟 】
                param.rec_type = 0; // 默认为普通类型
                // await ctx.model.WshopCart.findOrCreate({ where : { goods_id : param.goods_id },  defaults : param });
                  await ctx.model.WshopCart.create( param ); 
                return { status_code : config.statuscode.success,  message : 'ok' }
         }catch(err){
             console.log('err', err)
            return { status_code : config.statuscode.failure,  message : '添加购物车失败' }
         }
    }

    async edit(){
        const { ctx, service, config, logger, app  } = this;
           // 购物车里的商品是否过期； 【 30分钟 】 或 【 3小时 】
           // 如果 number == 0 ,则删除数据
           try{
              let { id, number } = ctx.request.body,
                  res = null,
                  Op =  app.Sequelize.Op;

                if( number == 0 ){
                    res = await ctx.model.WshopCart.destroy({ where : { id } });
                    return { status_code : config.statuscode.success,  message : 'ok' }
                }else{
                      res = await ctx.model.WshopCart.update({ number }, { where : { id, expired : { [ Op.gt ] :  Date.parse( new Date() )  } } });
                      if( res[0] > 0 ){
                        return { status_code : config.statuscode.success,  message : 'ok' }
                      }else{
                        return { status_code : config.statuscode.failure,  message : '编辑失败' }
                      }
                }
           }catch( err ){
             console.log('err', err)
             return { status_code : config.statuscode.failure,  message : '编辑失败' }
           }
    }

    async clear(){
        const { ctx, service, config, logger, app  } = this;
        try{
             await ctx.model.WshopCart.destroy({ where : ctx.request.body });
             return { status_code : config.statuscode.success,  message : 'ok' }
        }catch(err){
            console.log('err', err)
            return { status_code : config.statuscode.failure,  message : '操作失败' }
        }
    }

}


module.exports = CartService;
