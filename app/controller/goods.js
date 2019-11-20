'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {
  async index() {
        const { ctx } = this;
        ctx.body = 'hi, egg';
  }

  async category(){
     const { ctx, service, config, logger, app  } = this;
       ctx.body = {
             status_code : 200,
             message : 'ok',
             data : []
       }
  }

 async createCategory(){
    const { ctx, service, config, logger, app  } = this;
     try{
      ctx.validate({ category_name : 'string' },ctx.request.body)
     }catch( err ){
       ctx.body = {
             status_code : config.statuscode.failure,
             message : '参数错误',
            }
        return false;
     }
   //  ctx.body = await service.goods.createCategory();
           ctx.body = {
                   status_code : config.statuscode.failure,
                    message : '暂时无法创建',
                  }
   }


}

module.exports = GoodsController;
