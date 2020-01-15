const Service = require('egg').Service;


class ListService extends Service{
      async index(){
        const { ctx, service, config, logger, app  } = this;
           try{
               let { category_id, page = '1', goods_name = 'undefined'  } = ctx.query,
                   param = {},
                   limit = 10,
                   offset = Number( page );
                   offset = ( offset - 1 ) * limit;
                   param.category_id = category_id;
                   goods_name != 'undefined' ? param.goods_name = goods_name : '';
      
               let category = await ctx.model.WshopCategory.findAll();
               let { rows, count } = await ctx.model.WshopGoods.findAndCountAll({ where : param , offset, limit });
                  for( let i = 0; i < rows.length; i++ ){
                     if(  rows[i].category_attrs ){
                           rows[i].category_attrs = await rows[i].sequelize.WshopAttribution.findAll({  where : {  attr_id : rows[i].category_attrs.split(',') } });
                           rows[i].category_attrs.forEach( itm => {
                                 itm.attr_value = itm.attr_value.split(',');
                           })
                   }
                 }

               return { 
                  status_code : config.statuscode.success, 
                  data : { 
                     list :  ctx.util.transformUrl( rows,['goods_img', 'promotion_img' ] ), 
                     total : count,
                     category
                   } ,
                    message : 'ok' }
           }catch(err){
              console.log('err', err );
              return { status_code : config.statuscode.failure,  message : '获取失败' }
           }
      }

}


module.exports = ListService;





