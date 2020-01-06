const Controller = require('egg').Controller;


class WxIndexController extends Controller {
     async index(){
        const { ctx, service, config, logger, app  } = this;
         ctx.body = await service.wx.index.index();
     }


     async wxConfig(){
        const { ctx, service, config, logger, app  } = this;
         ctx.body = await service.wx.admin.fetData();
     }

     async editWxConfig(){
        const { ctx, service, config, logger, app  } = this;
        try{
               ctx.validate({ 
                  name : 'string',
                  appid : 'string',
                  appsecret : 'string',
                  organization : 'string',
                  intro : { required : false, type : 'string' }
            }, ctx.request.body)
        }catch(err){
           ctx.body = { status_code : config.statuscode.failure,message : '参数错误' }
           return false;
        }
        ctx.body = await service.wx.admin.edit();
     }

     async list(){
        const { ctx, service, config, logger, app  } = this;
        try{
            ctx.validate({
                 category_id : 'string',
                 goods_name : { required : false, type : 'string' }
            }, ctx.query )
        }catch(err){
             ctx.body = { status_code : config.statuscode.failure,message : '参数错误' }
              return false;
        }
        ctx.body = await service.wx.list.index();
     }


    async detail(){
        const { ctx, service, config, logger, app  } = this;
        try{
           ctx.validate({   goods_id : 'string' }, ctx.query)
        }catch( err ){
            ctx.body = { status_code : config.statuscode.failure,message : '参数错误' }
            return false;
        }
        ctx.body = await service.wx.index.detail();
    }


   async fetCart(){
      const { ctx, service, config, logger, app  } = this;  
      try{
         ctx.validate({ user_id : 'string' }, ctx.query)
      }catch(err){
         ctx.body = { status_code : config.statuscode.failure,message : '参数错误' }
         return false;
      }
      ctx.body = await service.wx.cart.fetCart();
   }

  async addToCart(){
     const { ctx, service, config, logger, app  } = this;
     try{
      ctx.validate({ 
            goods_attrs: "string",
            goods_id: 'number',
            goods_name: "string",
            list_pic_url: "string",
            number: "number",
            shop_price: "string",
            user_id: "string"
       }, ctx.request.body)
      }catch(err){
             console.log('err--参数错误',  err )
            ctx.body = { status_code : config.statuscode.failure,message : '参数错误' }
            return false;   
      }
     ctx.body = await service.wx.cart.add();
  }

  async editCart(){
    const { ctx, service, config, logger, app  } = this;
         try{
            ctx.validate({  id : 'number', number: "number" }, ctx.request.body)
            }catch(err){
                  ctx.body = { status_code : config.statuscode.failure,message : '参数错误' }
                  return false;   
            }
        ctx.body = await service.wx.cart.edit();
  }

  async clearCart(){
      const { ctx, service, config, logger, app  } = this;
      try{
         ctx.validate({  user_id : 'string' }, ctx.request.body)
         }catch(err){
               ctx.body = { status_code : config.statuscode.failure,message : '参数错误' }
               return false;   
         }
   ctx.body = await service.wx.cart.clear();
  }

  async login(){
     const { ctx, service, config, logger, app  } = this;
     try{
          ctx.validate({ 
               code : 'string',
               avatarUrl: "string",
               city:  "string",
               country:  "string",
               gender: "number",
               language:  "string",
               nickName: "string",
               province:  "string",
           }, ctx.request.body)
     }catch(err){
          ctx.body = { status_code : config.statuscode.failure,message : '参数错误' }
          return false;   
     }
     ctx.body = await service.wx.index.login();
  }


  async order(){
    const { ctx, service, config, logger, app  } = this;
   try{
      ctx.validate({  user_id : 'string' }, ctx.query )
   }catch( err ){
      ctx.body = { status_code : config.statuscode.failure,message : '参数错误' }
      return false;      
   }
   ctx.body = await service.wx.order.fetOrder();

  }

  async user(){
       const { ctx, service, config, logger, app  } = this;
       try{
         ctx.validate({  user_id : 'string' }, ctx.query )
      }catch( err ){
         ctx.body = { status_code : config.statuscode.failure,message : '参数错误' }
         return false;      
      }
       ctx.body = await service.wx.index.user();
  }

}

module.exports = WxIndexController;