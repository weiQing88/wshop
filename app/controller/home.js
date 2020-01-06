'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(){
    ctx.body = 'hi, egg';
  }

  async fetMenu(){
       const { ctx, service, config, logger, app  } = this;
       try{
         ctx.validate({ name : 'string' }, ctx.query )
       }catch(err){
          console.log( 'err', err );
          ctx.body = { status_code : config.statuscode.failure, message : '参数错误' };
          return; 
       }
       ctx.body = await service.home.menu();
  }


}

module.exports = HomeController;
