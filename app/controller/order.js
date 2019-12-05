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
        try{
            ctx.validate({
                id : 'number',
                order_sn: 'string',
                consignee: 'string',
                mobile: 'string',
                order_price: 'string',
                address:  'string',
                province:  'string',
                city:  'string',
                district:  'string',
            }, ctx.request.body )
        }catch(err){
            console.log( 'err', err );
            ctx.body = { status_code : config.statuscode.failure, message : '参数错误' };
            return false;
        }
          ctx.body = await service.order.order.edit();
    }


}


module.exports = OrderController;