const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');

class CommonService extends Service{
        captcha(){
           let captcha = svgCaptcha.create({
                           width : 150,
                           height : 39,
                           fontSize : 50,
                           color : true,
                           noise : 2, // 两条干扰线
                     });
           return {
                svgNode : captcha.data,
                text : captcha.text
              }
       }
}


module.exports = CommonService;