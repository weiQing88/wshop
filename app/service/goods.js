const Service = require('egg').Service;


var GoodsRule = {
     category_id : 'string',
     goods_name : 'string',
     goods_number: 'string',
     goods_sn : { required : false, type : 'string' },
     brand_id : { required : false, type : 'string' },
     is_on_sale: 'string',
     is_recommend: 'string',
     is_hot:'string',
     goods_brief:'string',
     category_name : 'string',
     goods_img : { required : false, type : 'string' },
     shop_price :'string',
     market_price : 'string',
     keywords : { required : false, type : 'string' },
     counter_price : { required : false, type : 'string', },
};



class GoodsService extends Service{
     async fetGoods(){
           let { ctx, app, config, logger, service } = this;
           let limit = Number(  ctx.query.limit || '10' ),
               offset = Number(  ctx.query.page || '1' );
               offset = ( offset - 1 ) * limit;

           try{
              let { page, type, limit : lmt, ...others } = ctx.query;
              let on_sale =  await ctx.model.WshopGoods.count({ where : { ...others, is_on_sale : '1' } });
              let not_sale = await ctx.model.WshopGoods.count({ where : { ...others, is_on_sale : '0' } });
              let stock = await ctx.model.WshopGoods.count({  where : { ...others, goods_number : [ 0, 1, 2, 3 ] } });
              let all = await ctx.model.WshopGoods.count();

              let query = { offset, limit, where : {} };
                 Object.keys( ctx.query ).forEach( key => {
                      if( key == 'type'){
                              switch( ctx.query.type ){
                                  case 'on_sale' : query.where.is_on_sale = '1';
                                  break;
                                  case 'not_sale' : query.where.is_on_sale = '0';
                                  break;
                                  case 'stock' : query.where.goods_number = [ 0, 1, 2, 3 ];
                                  break;
                              }
                      }else if( key != 'limit' && key != 'page' ){
                          ctx.util.isValid( ctx.query[key] ) && ( query.where[ key ] = ctx.query[key] );
                      }
                 });

               if(! ctx.util.isValid( query.where )) delete query.where;
                console.log( 'query--- query', query );
              let { rows = [], count = 0 } = await ctx.model.WshopGoods.findAndCountAll(query);
              let convertImgs = ( row, key ) => {
                               if( ctx.util.isValid( row[key]  ) ){
                                    let imgs =  row[key] .split(',');
                                        row[key] = [];
                                        imgs.forEach(( url, index ) => {
                                             if( url ){
                                                       let nameArr = url.split('.')[0];
                                                       nameArr = nameArr.split( `\\` );
                                                       let  name = nameArr[ nameArr.length - 1 ];
                                                       row[key][index] = {
                                                            uid : ~index,
                                                            url : `${url}`,
                                                            status : 'uploaded',
                                                            name
                                                   } 
                                             }
                                    })          
                              }  
                         };
              rows.forEach( row => { convertImgs(row,'goods_img'), convertImgs(row,'promotion_img') });

               return {
                    status_code : config.statuscode.success,
                    message : 'ok',
                    total : count, 
                    on_sale,
                    not_sale,
                    stock,
                    data : rows, 
                    all,
               }
           }catch( err ){
                console.log( 'err----------------------->', err );
                return {
                    status_code : config.statuscode.failure,
                    message : '获取失败'
               }
           }

          //   return {
          //       status_code : config.statuscode.success,
          //        message : 'ok',
          //        data : []
          //   }   
     }

     async createGoods(){
          let { ctx, app, config, logger, service } = this,
               res = {
                    status_code : config.statuscode.success,
                     message : '创建成功'
               },
               param = {},
               createRule = GoodsRule;
          if( ctx.util.isValid( ctx.request.body ) ){ // 无图片上传
                 param = ctx.request.body;
          }else{
                // 上传图片
               let rst = await service.common.uploadMultipleFile('goods');
               //  console.log(  '上传图片 rst---', rst )
               if( rst.state ){
                    param = rst.fields;
                    param.goods_img = rst.urls.join(',');
               }else{
                  return {
                          status_code : config.statuscode.failure,
                          message : '图片上传失败'
                    }
               }
          }

           try{
               ctx.validate( createRule, param)
               }catch( err ){
                    console.log( err );
                    return {
                         status_code : config.statuscode.failure,
                         message : '参数错误',
                    }
               }

            param.goods_id = ctx.util.uidGenerator();

          try{
               await ctx.model.WshopGoods.create( param );
          }catch( err ){
                console.log( err );
                res.status_code = config.statuscode.failure;
                res.message= '创建失败';
          }
          return res;
        //  return {  status_code : config.statuscode.failure, message : '暂时为支持创建'}
  }

  async editGoods(){
     let { ctx, app, config, logger, service } = this,
          createRule = GoodsRule,
          param = {},
          goods_id = '';
     if( ctx.util.isValid( ctx.request.body ) ){ // 无图片上传
          param = ctx.request.body;
          param.hasOwnProperty('goods_img') ? '' : param.goods_img = '';
       }else{
               // 上传图片
               let rst = await service.common.uploadMultipleFile('goods');
               if( rst.state ){
                    createRule.goods_id =  'string';
                    param = rst.fields;
                    param.goods_img = rst.urls.length ? rst.urls.join(',') : '';
                    if( param.hasOwnProperty('uploaded_img') ){
                         param.goods_img = param.uploaded_img +',' + param.goods_img;
                         delete  param.uploaded_img;
                    }
               }else{
                  return {
                          status_code : config.statuscode.failure,
                          message : '图片上传失败'
                    }
               }
       }
       try{
          ctx.validate( createRule, param)
          }catch( err ){
               console.log( err );
               return {
                    status_code : config.statuscode.failure,
                    message : '参数错误',
               }
          }

       if( param.hasOwnProperty('goods_id') ) goods_id = param.goods_id;

          try{
              await ctx.model.WshopGoods.update( param, { where : {  goods_id } });
                return {  status_code : config.statuscode.success, message : '编辑成功'}
          }catch( err ){
                console.log( err );
                return {  status_code : config.statuscode.failure, message : '编辑失败'}
          }
         
   }


   async editGoodsStatus(){
      let { ctx, app, config, logger, service } = this;
      let createRule = {};
        Object.keys( ctx.request.body ).forEach( key =>{ createRule[key]='string' });
      let { id, ...others } = ctx.request.body;
      try{
         ctx.validate(createRule)
      }catch(err){
          return { status_code : config.statuscode.failure, message : '参数错误'  }
      }

      try{
          await ctx.model.WshopGoods.update( others, { where : {  goods_id : id } });
          return {  status_code : config.statuscode.success, message : '编辑成功'}
      }catch(err){
          console.log( err );
          return {  status_code : config.statuscode.failure, message : '编辑失败'}
      }


   }


   async setPromotion(){
     let { ctx, app, config, logger, service } = this;
     let param = {};

       // 上传图片
       let rst = await service.common.uploadMultipleFile('promotion');

       if( rst.state ){
          param = rst.fields;
          param.promotion_img = rst.urls.length ? rst.urls.join(',') : '';
          let { promote_start_date, promote_end_date } = param;
          if(  Date.parse( promote_start_date  ) > Date.parse( promote_end_date  ) ){
               param.promote_start_date = promote_end_date;
               param.promote_end_date = promote_start_date;
          }
          if( param.hasOwnProperty('uploaded_img') ){
               param.promotion_img = param.uploaded_img +',' + param.promotion_img;
               delete  param.uploaded_img;
          }
     }else{
        return {
                status_code : config.statuscode.failure,
                message : '图片上传失败'
          }
     }

     try{
          ctx.validate({
               promote_price: 'string',
               is_promote: 'string',
               promotion_desc: 'string',
               promote_start_date: 'string',
               promote_end_date: 'string' ,
               goods_id : 'string',
               promotion_img : { required : false, type : 'string' },
          }, param)
     }catch(err){
          console.log( err );
          return { status_code : config.statuscode.failure, message : '参数错误'  }
     }

     try{
           let { goods_id, ...others } = param
          await ctx.model.WshopGoods.update( others, { where : {  goods_id } });
          return {  status_code : config.statuscode.success, message : '编辑成功'}
     }catch(err){
          return {  status_code : config.statuscode.failure, message : '编辑失败'}
     }

   }


  async deleteGoods(){
      let { ctx, app, config, logger, service } = this;
      try{
          let res = await ctx.model.WshopGoods.destroy({ where : { goods_id : ctx.query.goods_id } });
           return {  status_code : config.statuscode.success, message : '删除成功'}
      }catch(err){
          // logger
          return {  status_code : config.statuscode.failure, message : '删除失败'}
      }

  }


    
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




