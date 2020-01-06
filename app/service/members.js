const Service = require('egg').Service;

class MembersService extends Service{
       async admin(){
           const { ctx, service, config, logger, app  } = this;
           let limit = Number(  ctx.query.limit || '10' ),
                offset = Number(  ctx.query.page || '1' ),
                queryKeys = Object.keys( ctx.query ) || [];
                offset = ( offset - 1 ) * limit;

           try{
             let query = { offset, limit, where : {} };
                 queryKeys.forEach( key => {
                     if( key != 'limit' && key != 'page' ){
                            ctx.util.isValid( ctx.query[key] ) && ( query.where[ key ] = ctx.query[key] );
                        }
                  });
                if(! ctx.util.isValid( query.where )) delete query.where;
                  query.attributes = [ 'add_time',  'admin_role', 
                                     'avatar',  'email',  'id',  'last_login_ip', 
                                     'last_login_time',  'mobile', 
                                     'user_id',  'username'  ];
                let { count,rows } = await ctx.model.WshopAdmin.findAndCountAll(query)
                return  { status_code : config.statuscode.success, data : rows, total : count,  message : 'ok' };
           }catch(err){
               console.log('err', err);
               return  { status_code : config.statuscode.failure, message : '错误' };
           }
       }
   async edit(){
        const { ctx, service, config, logger, app  } = this;
        try{
            ctx.request.body.password = ctx.util.tohash( ctx.request.body.password );  
            await ctx.model.WshopAdmin.update( ctx.request.body, { where : ctx.params });
            return  { status_code : config.statuscode.success, message : '编辑成功' };
        }catch(err){
            return  { status_code : config.statuscode.failure, message : '错误' }; 
        }

   }

   async delete(){
        const { ctx, service, config, logger, app  } = this;

            console.log( 'ctx.params', ctx.params )

        try{
            await ctx.model.WshopAdmin.destroy({ where : ctx.params });
            return  { status_code : config.statuscode.success, message : '删除成功' };
        }catch(err){
            return  { status_code : config.statuscode.failure, message : '暂时无法创建' };
        }
   }

   async create(){
       const { ctx, service, config, logger, app  } = this;
       let param = ctx.util.deepCopy( ctx.request.body );
       param.last_login_ip = ctx.util.getClientIP( ctx.req ) || '127.0.0.1';
       param.add_time = ctx.util.currentDate();
       param.user_id = ctx.util.uidGenerator();
       param.password = ctx.util.tohash( param.password );  
       try{
           await ctx.model.WshopAdmin.create(param);
           return  { status_code : config.statuscode.success, message : '创建成功' };
       }catch(err){
          return  { status_code : config.statuscode.failure, message : '无法创建' };
       }
   }

   async role(){
       const { ctx, service, config, logger, app  } = this;
       let limit = Number(  ctx.query.limit || '10' ),
           offset = Number(  ctx.query.page || '1' );
           offset = ( offset - 1 ) * limit;
       try{
           let { rows, count  } = await ctx.model.WshopRole.findAndCountAll({ limit, offset });
            // console.log('rows', rows );
            // console.log('count', count );
            return  { status_code : config.statuscode.success, total : count, data : rows,  message : 'ok' };
       }catch(err){
           return  { status_code : config.statuscode.failure, message : '暂时' };
       }
   }

   async createRole(){
        const { ctx, service, config, logger, app  } = this;
        try{
            let { id, ...other } = ctx.request.body; 
            if( id ){
                 await  ctx.model.WshopRole.update(other,{ where : { id } });
            }else{
                 await ctx.model.WshopRole.findOrCreate({ where : ctx.request.body });
            }
            return  { status_code : config.statuscode.success, message : 'ok' };
        }catch(err){
            console.log( 'err---===', err)
            return  { status_code : config.statuscode.failure, message : '暂时' };
        }
   }


}

module.exports = MembersService;