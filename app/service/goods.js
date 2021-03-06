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
     market_price : { required : false, type : 'string' },
     keywords : { required : false, type : 'string' },
     counter_price : { required : false, type : 'string', },
};



var convertImgs = ( row, key, ctx ) => {
     if( ctx.util.isValid( row[key]  ) ){
          let imgs =  row[key].split(',');
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



class GoodsService extends Service{
     async fetGoods(){
           let { ctx, app, config, logger, service } = this;
           let limit = Number(  ctx.query.limit || '10' ),
               offset = Number(  ctx.query.page || '1' ),
               queryKeys = Object.keys( ctx.query ) || [];
               offset = ( offset - 1 ) * limit;
              
           try{
              let others = {};
                 queryKeys.forEach( key => {
                          if(['page', 'type', 'limit'].indexOf( key ) == -1 ){
                              ctx.util.isValid( ctx.query[key] ) && ( others[key] = ctx.query[key]  );
                          }
                  });
              let on_sale =  await ctx.model.WshopGoods.count({ where : { ...others, is_on_sale : '1' } });
              let not_sale = await ctx.model.WshopGoods.count({ where : { ...others, is_on_sale : '0' } });
              let stock = await ctx.model.WshopGoods.count({  where : { ...others, goods_number : [ 0, 1, 2, 3 ] } });
              let all = await ctx.model.WshopGoods.count({ where : { ...others }  });
              let query = { offset, limit, where : {} };
                  queryKeys.forEach( key => {
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
              let { rows = [], count = 0 } = await ctx.model.WshopGoods.findAndCountAll(query);

               for( let i = 0; i < rows.length; i++ ){
                    convertImgs(rows[i],'goods_img', ctx ), 
                    convertImgs(rows[i],'promotion_img', ctx );
                    if( rows[i].category_attrs ){
                         let attrsId = rows[i].category_attrs.split(',');
                         let res = await ctx.model.WshopAttribution.findAll({ where : { attr_id : attrsId  } });
                            rows[i].category_attrs = res;
                    }else{
                           rows[i].category_attrs = [];
                    }
               }

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
     }


     async bulkedit(){
          let { ctx, app, config, logger, service } = this;
          let { goods, type = 'update' } = ctx.request.body;
          try{
                goods.forEach( async g => {
                     if( type == 'update' ){
                         await ctx.model.WshopGoods.update( g ,{ where : { id : g.id } });
                     }else if( type == 'delete' ){
                         let imgs = await ctx.model.WshopGoods.findOne({ where : { id : g }, attributes : ['goods_img'] });
                         // 删除图片
                         await service.common.deletePicture( undefined, imgs.goods_img );
                         
                         await ctx.model.WshopGoods.destroy({ where : { id : g } });
                     }
                });
                return { status_code : config.statuscode.success,  message : '更新成功' }
          }catch( err ){
                 console.log(  'err', err);
                 return { status_code : config.statuscode.failure,  message : '更新失败' }
          }
     }


     async createGoods(){
          let { ctx, app, config, logger, service } = this,
               res = {
                    status_code : config.statuscode.success,
                     message : '创建成功'
               },
               param = {},
               createRule = ctx.util.deepCopy( GoodsRule );
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
  
  }





  async editGoods(){
     let { ctx, app, config, logger, service } = this,
          createRule = ctx.util.deepCopy( GoodsRule ),
          param = {},
          goods_id = '';
     if( ctx.util.isValid( ctx.request.body ) ){ // 无图片上传
          param = ctx.request.body;
          param.hasOwnProperty('goods_img') ? '' : param.goods_img = '';
       }else{
               // 上传图片
               let rst = await service.common.uploadMultipleFile('goods');
               if( rst.state ){
                    createRule.goods_id = 'string';
                    param = rst.fields;
                    param.goods_img = rst.urls.length ? rst.urls.join(',') : '';
                    if( param.hasOwnProperty('uploaded_img') ){
                         param.goods_img = param.uploaded_img +',' + param.goods_img;
                         delete  param.uploaded_img;
                    }
                      let imgs = await ctx.model.WshopGoods.findOne({  where : { goods_id : param.goods_id }, attributes : ['goods_img'] });
                       // 删除图片
                      await service.common.deletePicture( param.goods_img, imgs.goods_img );
               }else{
                  return {
                          status_code : config.statuscode.failure,
                          message : '图片上传失败'
                    }
               }
       };

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
          let imgs = await ctx.model.WshopGoods.findOne({  where : { goods_id : ctx.query.goods_id }, attributes : ['goods_img'] });
              // 删除图片
              await service.common.deletePicture( undefined, imgs.goods_img );

          let res = await ctx.model.WshopGoods.destroy({ where : { goods_id : ctx.query.goods_id } });
           return {  status_code : config.statuscode.success, message : '删除成功'}
      }catch(err){
          // logger
          console.log('delete err', err );
          return {  status_code : config.statuscode.failure, message : '删除失败'}
      }

  }



       async createCategory(){
      
               let { ctx, app, config, logger, service } = this;
               let  param = {},
                    createRule = {
                         category_name : 'string',
                         category_attrs : {  required : false, type : 'string' },
                         img_url : {  required : false, type : 'string' },
                         uploaded_img : {  required : false, type : 'string' }
                    };

                    if( ctx.util.isValid( ctx.request.body ) ){ // 无图片上传
                             param = ctx.request.body;
                    }else{
                         // 上传图片
                         let rst = await service.common.uploadMultipleFile('goods');

                         if( rst.state ){
                              param = rst.fields;
                              param.img_url = rst.urls.join(',');

                         }else{
                              return { status_code : config.statuscode.failure, message : '图片上传失败' }
                         }
                    }

                    try{
                         ctx.validate( createRule, param)
                         }catch( err ){
                              console.log( err );
                              return { status_code : config.statuscode.failure, message : '参数错误' }
                         }

                         param.category_id = ctx.util.uidGenerator();
                         param.is_show = 1;
                    try{
                         await ctx.model.WshopCategory.create( param );
                         return { status_code : config.statuscode.success,  message : '创建成功' }
                    }catch( err ){
                         console.log( err );
                         return { status_code : config.statuscode.failure, message : '创建失败' }
     
                    }
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
           let data =  await ctx.model.WshopCategory.findAll({ attributes : [ 'id', 'img_url', 'category_name', 'category_attrs', 'category_id' ] });
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

                   if( plainData[i].img_url ) convertImgs(plainData[i],'img_url', ctx );
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
          let { ctx, app, config, logger, service } = this,
               createRule = {
                    category_name : 'string',
                    category_attrs : {  required : false, type : 'string' },
                    img_url : {  required : false, type : 'string' },
                    uploaded_img : {  required : false, type : 'string' },
                    category_id : {  required : false, type : 'string' },
               },
               param = {},
               category_id = '';

               if( ctx.util.isValid( ctx.request.body ) ){ // 无图片上传
                    param = ctx.request.body;
                    param.hasOwnProperty('img_url') ? '' : param.img_url = '';
               }else{
                         // 上传图片
                         let rst = await service.common.uploadMultipleFile('goods');
                         if( rst.state ){
                              param = rst.fields;
                              param.img_url = rst.urls.length ? rst.urls.join(',') : '';
                              if( param.hasOwnProperty('uploaded_img') ){
                                   param.img_url = param.uploaded_img +',' + param.img_url;
                                   delete  param.uploaded_img;
                              }

                           let imgs = await ctx.model.WshopCategory.findOne({  where : { category_id : param.category_id }, attributes : ['img_url'] });
                              // 删除图片
                             await service.common.deletePicture( param.img_url, imgs.img_url );


                         }else{
                             return {  status_code : config.statuscode.failure, message : '图片上传失败' }
                         }
               }

                 try{
                    ctx.validate( createRule, param)
                    }catch( err ){
                         console.log( err );
                         return {  status_code : config.statuscode.failure, message : '参数错误' }
                    }

                  if( param.hasOwnProperty('category_id') ) category_id = param.category_id;
                    try{
                        await ctx.model.WshopCategory.update( param, { where : {  category_id } });
                         return {  status_code : config.statuscode.success, message : '编辑成功'}
                    }catch( err ){
                         console.log( err );
                         return {  status_code : config.statuscode.failure, message : '编辑失败'}
                    }



       }






      async deleteCategory(){
              let { ctx, app, config, logger, service } = this;
              let { success, failure } = config.statuscode;
              let bool = true;
              try{
                let imgs = await ctx.model.WshopCategory.findOne({  where : { category_id : ctx.query.category_id }, attributes : ['img_url'] });
                    // 删除图片
                  await service.common.deletePicture( undefined, imgs.img_url );

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
                    if( item.attr_value ) item.attr_value = item.attr_value.split(','); 
                });

            return {
                     status_code : config.statuscode.success,
                     message : 'ok',
                     total : count,
                     data : rows, 
                  }
       }catch( err ){
               //  logger
              console.log(  err ); 
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
              param.attr_value = param.attr_value.join(',');
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
         others.attr_value = others.attr_value.join(',');
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




