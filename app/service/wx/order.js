const Service = require('egg').Service;


class OrderService extends Service{
      async fetOrder(){
         const { ctx, service, config, logger, app  } = this;
         try{
             let res = await ctx.model.WshopOrder.findAll({ 
                            where : ctx.query, 
                            include : [
                                {
                                    model : ctx.model.WshopOrderGoods,
                                    as : 'goods'
                                }
                            ]
                       });
            return { status_code : config.statuscode.success, data : res,   message : 'ok' }
         }catch(err){
             console.log('err---err', err )
            return { status_code : config.statuscode.failure,  message : '获取失败' }
         }
         
      }
}


module.exports = OrderService;

