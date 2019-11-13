const Service = require('egg').Service;

class UserService extends Service{
       async login( param ){
               console.log(  'param'  )
       }
}


module.exports = UserService;