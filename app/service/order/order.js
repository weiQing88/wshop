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

    return {
        status_code : config.statuscode.failure,
        message : '编辑失败'  
    }
  }




}

module.exports = OrderService;