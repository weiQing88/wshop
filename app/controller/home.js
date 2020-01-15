'use strict';
const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(){
        const { ctx, service, config, logger, app  } = this;
        try{

           console.log('返回静态页面')
           ctx.response.type = 'html';
           ctx.body = fs.readFileSync( path.resolve(  process.cwd(),'public/admin/index.html'), 'utf8' );
           
        }catch( err ){
            console.log('err', err )
            ctx.body = 'Page Not Found';
        }
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
