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
                    result.message = '创建成功';
           }catch( err ){
                  // logger
                 // console.log( err )
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
             // include : [ ctx.model.WshopCategoryAttrs, ..... ] or [ { model : xx, as : zz } ] 多个写法；
             // include : { model : xx } 单个写法
             let data =  await ctx.model.WshopCategory.findAll({ include: [ { model : ctx.model.WshopCategoryAttrs, as : 'attrs'  }  ] });
             result.status_code = config.statuscode.success;
             result.message = 'ok';
             result.data = data;
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
       try{
        let data = await ctx.model.WshopCategoryAttrs.findAll();
            return {
                     status_code : config.statuscode.success,
                     message : 'ok',
                     total : data.length,
                     data
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

  async createAttrs(){
       let { ctx, app, config, logger, service } = this;  
       let { success, failure } = config.statuscode;
       let bool = true;
       try{
          let res = await ctx.model.WshopCategoryAttrs.create(); 
              if( res[0] <= 0 ) bool = false;
       }catch( errr ){
               //  logger
              console.log( err );    
              bool = false;
       }
       return {
              status_code : bool ? success : failure,
              message :  bool ? '创建成功' : '创建失败'
         }

  }
  async editAtts(){

  }
  async deleteAttrs(){

  }



}

module.exports = GoodsService;