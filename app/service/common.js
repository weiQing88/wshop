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
    async mcaptcha(){ // 短信验证码
        let res = {
              "ReturnStatus": "Success",
              "Message": "ok",
              "RemainPoint": 420842,
              "TaskID": 18424321,
              "SuccessCounts": 1
            }

          let err = {
              "ReturnStatus": "Faild",
              "Message": "短信必须带【】格式签名",
              "RemainPoint": 0,
              "TaskID": 0,
              "SuccessCounts": 0
            }

          return res
  
      }
}


module.exports = CommonService;