const Service = require('egg').Service;

class GoodsService extends Service{
       async createCategory(){
              let { ctx, app, config, logger, service } = this;
              let result = {};
              let param = Object.assign({}, ctx.request.body);
                  param.category_id = ctx.util.uidGenerator();
                 param.is_show = 1;
           try{
              // let cgt = await ctx.model.WshopCategory.create( param );
                   await ctx.model.WshopCategory.create( param );
                    result.status_code = config.statuscode.success;
                    result.status_code = '创建成功';
           }catch( err ){
                  // logger
                 // console.log( err )
                  result.status_code = config.statuscode.failure;
                  result.status_code = '创建失败';
           }
            return result
       }

}

module.exports = GoodsService;