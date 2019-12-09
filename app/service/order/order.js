const Service = require('egg').Service;

class OrderService extends Service{
       async list(){
        const { ctx, service, config, logger, app  } = this;
        let limit = Number(  ctx.query.limit || '10' ),
            offset = Number(  ctx.query.page || '1' ),
            queryKeys = Object.keys( ctx.query ) || [];
            offset = ( offset - 1 ) * limit;

        try{
              let others = {};
                queryKeys.forEach( key => {
                        if(['page', 'type', 'limit'].indexOf( key ) == -1 ){
                            ctx.util.isValid( ctx.query[key] ) && ( others[key] = ctx.query[key]  );
                        }
                });
                let payment =  await ctx.model.WshopOrder.count({ where : { ...others, pay_status : '0' } });
                let delivery = await ctx.model.WshopOrder.count({ where : { ...others, shipping_status : '0' } });
                let cancel = await ctx.model.WshopOrder.count({  where : { ...others, order_status : '2' } });
                let complete = await ctx.model.WshopOrder.count({  where : { ...others, order_status :'1' } });
                let all = await ctx.model.WshopOrder.count({ where : { ...others }  });
                let query = { offset, limit, where : {} };

                queryKeys.forEach( key => {
                    if( key == 'type'){
                            switch( ctx.query.type ){
                                case 'payment' : query.where.pay_status = '0';
                                break;
                                case 'delivery' : query.where.shipping_status = '0';
                                break;
                                case 'cancel' : query.where.order_status = '2';
                                break;
                                case 'complete' : query.where.order_status = '1';
                                break;
                            }
                    }else if( key != 'limit' && key != 'page' ){
                        ctx.util.isValid( ctx.query[key] ) && ( query.where[ key ] = ctx.query[key] );
                    }
               });
            if(! ctx.util.isValid( query.where )) delete query.where;
            let { count, rows } = await ctx.model.WshopOrder.findAndCountAll(query);
               return {
                    status_code : config.statuscode.success,
                    message : 'ok',
                    data : rows, 
                    total : count,
                    payment,
                    delivery,
                    cancel,
                    complete,
                    all,
               }

        }catch(err){
             // logger
             console.log('err', err)
             return { 
                status_code : config.statuscode.failure,
                message : '获取失败'  
              }
        }

      

      }

  async edit(){
    const { ctx, service, config, logger, app  } = this;
    // 该操作动作需记录
    // logger()
    try{
        let { id, ...others } = ctx.request.body;
        await ctx.model.WshopOrder.update(others, { where : { id }  });
        return { status_code : config.statuscode.success, message : 'ok'  }  
    }catch(err){
           // logger
           console.log('err', err)
        return { status_code : config.statuscode.failure, message : '编辑失败'  }  
    }

  }

  async detail(){
    const { ctx, service, config, logger, app  } = this;
        try{
          let res = await ctx.model.WshopOrder.findOne({  where : ctx.query });
          let goods = await ctx.model.WshopProduct.findAll({ where : { order_id : ctx.query.id } });

        //   let goods = await ctx.model.query(`SELECT order_id, 
        //                             shop_price, goods_number, goods_name, 
        //                             SUM( shop_price ) as sum from wshop_product WHERE order_id = ${ ctx.query.order_id } GROUP BY 'order_id'`);
            // （1）发货/退货， 
            // （2）支付/退款

            return { 
                    status_code : config.statuscode.success,
                    message : 'ok',
                    data : {
                        basic  :  res.dataValues || {}, 
                        goodsInfo : goods, //  goods[0] || [],
                        payment : [],
                        delivery : [],
                        note : ctx.util.isValid( res.dataValues ) ? res.dataValues.note : '',
                    }
                 }  
        }catch(err){
            console.log('err-----000--0',err);
            return { status_code : config.statuscode.failure, message : '获取失败'  }  
        }

  }


  async orderInfo(){
       const { ctx, service, config, logger, app  } = this;
       try{
           let res = await ctx.model.WshopOrder.findOne({ where : ctx.query, include : [ { model : ctx.model.WshopProduct, attributes : [ 'id','goods_name', 'goods_id'] } ] });
           return { 
               status_code : config.statuscode.success, 
               message : 'ok',
               data : res
              }  
       }catch(err){
         console.log('err-----000--0',err);
         return { status_code : config.statuscode.failure, message : '获取失败'  }  
       }
  }


  async booking(){
    const { ctx, service, config, logger, app  } = this;
      /**
       *  只有已付款，才能发起预约 【 wshop_order.pay_status > 1 】
       */
      let BKResult = await  service.kdApi.bookingPickUp();
        if( BKResult.Success ){
            let { OrderCode, ShipperCode, LogisticCode = ctx.util.uidGenerator() } = BKResult.Order;
            let transaction = await ctx.model.transaction();
             /**
              * 测试环境只有“顺丰”有物流单号返回
              *  OrderCode: '19881',
              *  ShipperCode: 'SF',
              *  LogisticCode: '928989812312' , 物流单号; 
              */
          //  console.log('OrderCode, ShipperCode,  LogisticCode ', OrderCode, ShipperCode,  LogisticCode )
            try{
                await ctx.model.WshopOrder.update({ 
                            shipping_status : 1, 
                            logistic_code : LogisticCode, 
                            shipper_code : ShipperCode }, 
                          { 
                              where : { order_id : OrderCode  },
                              transaction
                           });
                await ctx.model.WshopProduct.update({ shipping_status : 1 },{ where : { order_uid : OrderCode }, transaction });
                 // 提交事务
                 await transaction.commit();
                return { status_code : config.statuscode.success, message : 'ok' }  
            }catch(err){
                 console.log( 'err  oooooo', err );
                 // 事务回滚
                 await transaction.rollback();
                return { status_code : config.statuscode.failure, message : '预定失败111' }  
            }
         //   return { status_code : config.statuscode.failure, message : '预定失败111' }  
        }else{
            return { status_code : config.statuscode.failure, message :  BKResult.Reason || '预定失败222'  }  
        }
  }



}

module.exports = OrderService;