const Controller = require('egg').Controller;


class OrderController extends Controller {

    async order(){
          const { ctx, service, config, logger, app  } = this;
          /**
           *  这里需请求第三方【快递鸟】，获得当前物流状态
           *  订单编号可以调用第三方【快递鸟】预约取件生成，也可手动输入。
           */
           ctx.body = await service.order.order.list();
    }

    async edit(){
        const { ctx, service, config, logger, app  } = this;
        var createRule = {
            id : 'number',
            order_sn: 'string',
            consignee: 'string',
            mobile: 'string',
            order_price: 'string',
            address:  'string',
            province:  'string',
            city:  'string',
            district:  'string',
        };
        let keys = Object.keys( ctx.request.body );
        if( keys.length == 2 && keys.indexOf('note') > -1 ) createRule = { id : 'number', note : 'string' };
        try{
            ctx.validate(createRule, ctx.request.body )
        }catch(err){
            console.log( 'err', err );
            ctx.body = { status_code : config.statuscode.failure, message : '参数错误' };
            return false;
        }
          ctx.body = await service.order.order.edit();
    }

    async detail(){
        const { ctx, service, config, logger, app  } = this;
            try{
                ctx.validate({ order_id : 'string', id : 'string' }, ctx.query );
            }catch(err){
                console.log( 'err', err );
                ctx.body = { status_code : config.statuscode.failure, message : '参数错误' };
                return;
            }
            ctx.body = await service.order.order.detail();
            
    }

    async orderInfo(){
          const { ctx, service, config, logger, app  } = this;
          try{
            ctx.validate({ order_id : 'string', id : 'string' }, ctx.query );
           }catch(err){
            console.log( 'err', err );
            ctx.body = { status_code : config.statuscode.failure, message : '参数错误' };
            return;
           }
          ctx.body = await service.order.order.orderInfo();
    }

    async booking(){
        const { ctx, service, config, logger, app  } = this;
        try{
            ctx.validate({ 
                PayType: 'string',
                ShipperCode: 'string',
                ExpType: 'number',
                OrderCode: 'number',
                Receiver: 'object',
                Commodity: 'array'
           }, ctx.request.body)
        }catch(err){
            console.log( 'err', err );
            ctx.body = { status_code : config.statuscode.failure, message : '参数错误' };
            return;
        }
       // ctx.body = { status_code : config.statuscode.failure, message : '预定失败99-99' }  
        ctx.body = await service.order.order.booking();
    }


}


module.exports = OrderController;