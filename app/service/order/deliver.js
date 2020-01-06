const Service = require('egg').Service;

class DeliverService extends Service{
        async shipped(){
            const { ctx, service, config, logger, app  } = this;
            let limit = Number(  ctx.query.limit || '10' ),
                offset = Number(  ctx.query.page || '1' ),
                queryKeys = Object.keys( ctx.query ) || [];
                offset = ( offset - 1 ) * limit;
            try{
                let query = { offset, limit, where : {} };
                    queryKeys.forEach( key => {
                    if( key != 'limit' && key != 'page' ){
                            ctx.util.isValid( ctx.query[key] ) && ( query.where[ key ] = ctx.query[key] );
                        }
                });
              if(! ctx.util.isValid( query.where )) delete query.where;
              let { count, rows } = await ctx.model.WshopOrder.findAndCountAll(query);
            return { status_code : config.statuscode.success, data : { count, rows }, message : 'ok' }  
            }catch(err){
                console.log( 'err--++----++_--', err );
                return { status_code : config.statuscode.failure, message : '失败'  }  
            }
     }

   async shippedItem(){
       const { ctx, service, config, logger, app  } = this;
       try{
           let res = await ctx.model.WshopOrder.findOne({ where : ctx.params, include : [ 
                   { model : ctx.model.WshopProduct, attributes : ['goods_name', 'goods_number','goods_id'] } 
                     ] 
                });
            return { status_code : config.statuscode.success, data : res, message : 'ok'  }  
       }catch(err){
           console.log( 'err--++----++_--', err );
           return { status_code : config.statuscode.failure, message : '获取失败'  }  
       }
   }
   
      
}

module.exports = DeliverService;