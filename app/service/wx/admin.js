const Service = require('egg').Service;


class AdminService extends Service{

    async fetData(){
        const { ctx, service, config, logger, app  } = this;
        try{
            let res = await ctx.model.WshopWx.findAll();
            return { status_code : config.statuscode.success,  data : res[0],  message : 'ok' }
        }catch(err){
             console.log( err )
            return { status_code : config.statuscode.failure,  message : '获取失败' }
        }
    
    }

    async edit(){
        const { ctx, service, config, logger, app  } = this;
        try{
            await ctx.model.WshopWx.upsert( ctx.request.body);
            return { status_code : config.statuscode.success,  message : 'ok' }
        }catch(err){

            return { status_code : config.statuscode.failure,  message : '编辑失败' }
        }
        console.log( 'ctx.request.body -----ctx.request.body ', ctx.request.body  )
     
    }



}


module.exports = AdminService;
