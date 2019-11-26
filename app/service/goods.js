const Service = require('egg').Service;


class GoodsService extends Service{
       async createCategory(){
              let { ctx, app, config, logger, service } = this;
              let result = {}
              let param = Object.assign({}, ctx.request.body);
                  param.category_id = ctx.util.uidGenerator();
                  param.is_show = 1;
                  if( ctx.util.isValid( param.category_attrs ) ) param.category_attrs = param.category_attrs.join(',');
           try{
                    await ctx.model.WshopCategory.create( param );
                    result.status_code = config.statuscode.success;
                    result.message = '创建成功';
                  // throw new Error();  // 即使数据库操作成功 , 此条语句依然会回滚
           }catch( err ){
                  // logger
                  console.log( err )
                  result.status_code = config.statuscode.failure;
                  result.message = '创建失败';
           }
            return result
          
       }
   
   async category(){
       let { ctx, app, config, logger, service } = this;
       let result = {};
        try{
              // 参照 ： https://www.jianshu.com/p/078087c69b77
             // 关联模型的查询
             // include : [ ctx.model.WshopAttribution, ..... ] or [ { model : xx, as : zz, required: true/false } ] 多个写法；
             // include : { model : xx } 单个写法
            //  例子： ctx.model.WshopCategory.findAll({  include: [ {  model : ctx.model.WshopAttribution, as : 'attrs'}  ]});
           let data =  await ctx.model.WshopCategory.findAll({ attributes : [ 'id', 'category_name', 'category_attrs', 'category_id' ] });
           let plainData = [];
           for( let i = 0; i< data.length; i++ ){
                     plainData[i] = data[i].get({ plain : true });
                     if( ctx.util.isValid( plainData[i].category_attrs ) ){
                              plainData[i].category_attrs = await data[i].sequelize.WshopAttribution.findAll({ 
                                   where : {
                                       attr_id : plainData[i].category_attrs.split(',')
                                   },
                                   attributes : ['attr_id', 'attr_name']
                         });
                     }else{
                         plainData[i].category_attrs = [];
                     }
               }
               result.status_code = config.statuscode.success;
               result.message = 'ok';
               result.data = plainData;
        }catch( err ){
             // logger  
             console.log( err );
             result.status_code = config.statuscode.failure;
             result.message = '获取失败';     
        }
        return result
   }




       async editCategory(){
           let { ctx, app, config, logger, service } = this;
           let { category_id, ...others } = ctx.request.body;
           let { success, failure } = config.statuscode;
           let bool = true;
           if( ctx.util.isValid( others.category_attrs ) )  others.category_attrs = others.category_attrs.join(',');
           try{
             let res = await ctx.model.WshopCategory.update(others, { where : { category_id } });
             // console.log('res----- update', res)
                if( res[0] <= 0 ) bool = false;
           }catch( err ){
              // logger
              console.error( err );
                bool = false;
           }

           return {
                     status_code : bool ? success : failure,
                     message :  bool ? '编辑成功' : '编辑失败'
                }

       }

      async deleteCategory(){
              let { ctx, app, config, logger, service } = this;
              let { success, failure } = config.statuscode;
              let bool = true;
              try{
                 let res = await ctx.model.WshopCategory.destroy({ where : { category_id : ctx.query.category_id } });
                   // console.log( 'res......', res )
                    if( res[0] <= 0 ) bool = false;
              }catch( err ){
                     console.error( err );
                     bool = false;   
              }
              return {
                     status_code : bool ? success : failure,
                     message :  bool ? '删除成功' : '删除失败'
                }

       }


 async attrs(){
       let { ctx, app, config, logger, service } = this; 
       let limit = Number(  ctx.query.limit || '10' ),
           offset = Number(  ctx.query.page || '1' );
           offset = ( offset - 1 ) * limit;

       try{
        let { count, rows } = await ctx.model.WshopAttribution.findAndCountAll({ offset, limit, });
             rows.forEach( item => { 
                  item.attr_value = JSON.parse( item.attr_value );
                });

            return {
                     status_code : config.statuscode.success,
                     message : 'ok',
                     total : count,
                     data : rows, 
                  }
       }catch( err ){
               //  logger
              console.log( err ); 
              return {
                      status_code : config.statuscode.failure,
                      message : '获取失败'
              }
       }
   }


 
  async createAttr(){
       let { ctx, app, config, logger, service } = this;  
       let { success, failure } = config.statuscode;
       let bool = true;
       try{
          let param = ctx.request.body;
              param.attr_id = ctx.util.uidGenerator();
              param.attr_value = JSON.stringify( param.attr_value );
          let res = await ctx.model.WshopAttribution.create( param ); 
              if( !res.hasOwnProperty('dataValues') ) bool = false;
       }catch( err ){
               //  logger
              console.log( err );    
              bool = false;
       }
       return {
              status_code : bool ? success : failure,
              message :  bool ? '创建成功' : '创建失败'
         }

  }



  async editAtt(){
     let { ctx, app, config, logger, service } = this;  
     let { attr_id, ...others } = ctx.request.body;
     let { success, failure } = config.statuscode;
     let bool = true;
       others.attr_value = JSON.stringify( others.attr_value );
     try{
      let res = await ctx.model.WshopAttribution.update(others, { where : { attr_id } });
          if( res[0] <= 0 ) bool = false;
     }catch( err ){
        // logger
          console.error( err );
          bool = false;
     }
     return {
               status_code : bool ? success : failure,
               message :  bool ? '编辑成功' : '编辑失败'
          }
  }


  async deleteAttr(){
     let { ctx, app, config, logger, service } = this;  
     let { success, failure } = config.statuscode;
     let bool = true;
     try{
          let cItem = await ctx.model.query(`SELECT * FROM wshop_category WHERE category_attrs LIKE '%${ctx.query.attr_id}%'`);
           if( ctx.util.isValid( cItem[0]  ) ){
                return {
                    status_code : failure,
                    message : '该属性已被商品分类关联，请先取消关联'
                }
           }else{
               let res = await ctx.model.WshopAttribution.destroy({ where : { attr_id : ctx.query.attr_id } });
               if( res[0] <= 0 ) bool = false;
           }
     }catch( err ){
            console.log( err );
            bool = false;
     }
     return {
          status_code : bool ? success : failure,
          message :  bool ? '删除成功' : '删除失败'
     }
  }

}

module.exports = GoodsService;





