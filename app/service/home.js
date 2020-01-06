const Service = require('egg').Service;
const MENU = require('../public/menu');

class HomeService extends Service{
       async menu(){
          let { ctx, app, config, logger, service } = this;
          try{
              let data = await ctx.model.WshopRole.findOne({ where : ctx.query });
              let authorities = data.authorities.split(',');
              let mStructure = {};
              let newMenu = [];
                  authorities.forEach( itm =>{
                  let key = itm.split('-')[0];
                  if( Array.isArray( mStructure[key] ) == false )  mStructure[key]  = [];
                     mStructure[key].push( itm )
               });
               Object.keys( mStructure ).forEach( key => {
                        MENU.forEach( item => {
                        if( item.key == key ) {
                              let menu =  ctx.util.deepCopy( item );
                                 menu.children = [];
                                 authorities.forEach( k =>{
                                       item.children.forEach( itm => {
                                             if( itm.key == k )  menu.children.push( ctx.util.deepCopy( itm ) )
                                       })
                                 });
                              newMenu.push( menu )
                        }
                     })
               });

             newMenu.unshift( MENU[0] );

       let formatter = (data, parentPath = '/', parentAuthority) => {
                        return data.map(item => {
                        let { path } = item;
                        if (!ctx.util.isUrl(path)) {
                           path = parentPath + item.path;
                        }
                        const result = { ...item, path,  authority: item.authority || parentAuthority };
                        if (item.children) {
                              result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
                           }
                        return result;
                        });
                     };

             return { status_code : config.statuscode.success, data : formatter( newMenu ),  message : 'ok' }
          }catch(err){
            console.log(  'err------', err);
            return { status_code : config.statuscode.failure,  message : '获取失败11' }
          }
       }
}


module.exports = HomeService;