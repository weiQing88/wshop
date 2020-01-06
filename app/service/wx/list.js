const Service = require('egg').Service;


class ListService extends Service{
      async index(){
        const { ctx, service, config, logger, app  } = this;
           try{
               if( ctx.query.hasOwnProperty('goods_name') && ctx.query.goods_name == 'undefined' ) delete ctx.query.goods_name;
               let category = await ctx.model.WshopCategory.findAll();
               let res = await ctx.model.WshopGoods.findAll({ where : ctx.query , offset : 0, limit : 10 });
                  for( let i = 0; i < res.length; i++ ){
                     if(  res[i].category_attrs ){
                           res[i].category_attrs = await res[i].sequelize.WshopAttribution.findAll({  where : {  attr_id : res[i].category_attrs.split(',') } });
                           res[i].category_attrs.forEach( itm => {
                                 itm.attr_value = itm.attr_value.split(',');
                           })
                  }
                 }
               return { status_code : config.statuscode.success, data : { list :  ctx.util.transformUrl( res,['goods_img', 'promotion_img' ] ), category } , message : 'ok' }
           }catch(err){
              console.log('err', err );
              return { status_code : config.statuscode.failure,  message : '获取失败' }
           }
      }

}


module.exports = ListService;





