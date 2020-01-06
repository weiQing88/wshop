const Controller = require('egg').Controller;


class MembersController extends Controller {
        async admin(){
            const { ctx, service, config, logger, app  } = this;
            ctx.body = await service.members.admin();
        }
      async editAdmin(){
          const { ctx, service, config, logger, app  } = this;
          ctx.body = await service.members.edit();
      }
    async createAdmin(){
        const { ctx, service, config, logger, app  } = this;
        try{
            ctx.validate({
                admin_role: "string",
                email: "string",
                mobile:  "string",
                password: "string",
            }, ctx.request.body)
        }catch(err){
            console.log( 'err', err );
            ctx.body = { status_code : config.statuscode.failure, message : '参数错误' };
            return;
        }
        ctx.body = await service.members.create();
    }

 async deleteAdmin(){
    const { ctx, service, config, logger, app  } = this;
    ctx.body = await service.members.delete();
  }

  async role(){
    const { ctx, service, config, logger, app  } = this;
    ctx.body = await service.members.role();
  }

 async createRole(){
     const { ctx, service, config, logger, app  } = this;
      try{
         ctx.validate({ name : 'string' }, ctx.request.body)
      }catch(err){
        console.log( 'err', err );
        ctx.body = { status_code : config.statuscode.failure, message : '参数错误' };
        return; 
      }
     ctx.body = await service.members.createRole();
  }


}



module.exports = MembersController;