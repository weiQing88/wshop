'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {
  async index() {
        const { ctx } = this;
        ctx.body = 'hi, egg';
  }


  async goodsList(){
       const { ctx, service, config, logger, app  } = this;
       ctx.body =  await service.goods.fetGoods();
  }

  async editGoods(){
      const { ctx, service, config, logger, app  } = this;
          let createRule = {};
         let method = ctx.method.toLocaleLowerCase();

             console.log( 'ctx.request.body---------', ctx.request.body );


         switch( method ){
             case 'post' :  ctx.body =  await service.goods.createGoods();
             break;
         }



  }


  async category(){
     const { ctx, service, config, logger, app  } = this;
       ctx.body =  await service.goods.category();
  }

 async editCategory(){
    const { ctx, service, config, logger, app  } = this;
       let createRule = {};
       let param = ctx.request.body;
       let method = ctx.method.toLocaleLowerCase();
        switch( method ){
          case 'post' : createRule = { category_name : 'string', category_attrs : {  required : false, type : 'array' } };
          break;
          case 'patch' : createRule = { category_name : 'string', category_id : 'string', category_attrs : { required : false,  type : 'array' } };
          break;
          case 'delete' : createRule = { category_id : 'string' }, param = ctx.query;
          break;
      }
       try{
            ctx.validate(createRule, param )
        }catch( err ){
          ctx.body = {
                status_code : config.statuscode.failure,
                message : '参数错误',
                }
            return false;
        }

     switch( method ){
          case 'post' : ctx.body = await service.goods.createCategory();;
          break;
          case 'patch' :  ctx.body = await service.goods.editCategory();
          break;
          case 'delete' :   ctx.body = await service.goods.deleteCategory();
          break;
       }

   }


   async attrs(){
      const { ctx, service, config, logger, app  } = this;
        ctx.body = await service.goods.attrs();
   }



  async editAttrs(){
     let { ctx, service, config, logger, app  } = this;
     let createRule = {};
     let param = ctx.request.body;
     let method = ctx.method.toLocaleLowerCase();

     switch( method ){
          case 'post' : createRule = { attr_name : 'string', attr_value : 'array' };
          break;
          case 'patch' : createRule =  { attr_name : 'string', attr_value : 'array', attr_id : 'string' };
          break;
          case 'delete' : createRule = { attr_id : 'string' }, param = ctx.query;
          break;
       }

      try{
        ctx.validate(createRule, param )
      }catch( err ){
        ctx.body = {
              status_code : config.statuscode.failure,
              message : '参数错误',
              }
          return false;
      }


     switch( method ){
          case 'post' : ctx.body = await service.goods.createAttr();;
          break;
          case 'patch' :  ctx.body = await service.goods.editAtt();
          break;
          case 'delete' :   ctx.body = await service.goods.deleteAttr();
          break;
       }
  }



}

module.exports = GoodsController;
