// 快递鸟API
const qs = require('qs');
const base64 = require('simple-base64');
const urlencode = require('urlencode');
const CryptoJS = require('crypto-js')
const Service = require('egg').Service;
const APPKEY = 'c47d1690-5386-4a90-a857-7831313be039';
const EBusinessID = 'test1606087';
const ReqURL = 'http://sandboxapi.kdniao.com:8080/kdniaosandbox/gateway/exterfaceInvoke.json';
const SENDER = {
        Name : '华夏工作室',
        Tel : '13641478954',
        Mobile : '5247841',
        ProvinceName : '广东省',
        CityName : '深圳市',
        Address : '龙岗区南联小区',
};


function base64_encode( signStr ){
    return base64.encode( signStr )
}

function md5( signStr ){
   return CryptoJS.MD5(signStr).toString()
}

function encrypt( data ){  
    return encodeURIComponent( base64_encode( md5( data + APPKEY ) ) )
}




class KdnService extends Service{
       async bookingPickUp(){ // 预约取件
            let { ctx, app, config, logger, service } = this;
              let p = ctx.util.deepCopy( ctx.request.body );
                  p.Sender = ctx.util.deepCopy( SENDER );
              let param = {
                  RequestData : encodeURIComponent( JSON.stringify( p ) ),
                  EBusinessID,
                  RequestType : 1001,
                  DataSign : encrypt( JSON.stringify( p ) ),
                  DataType : 'json'
              };

          try{
             let res = await ctx.curl( ReqURL, { 
                      method: 'POST',
                      dataType: 'json',
                      data : param,
               });  
              return  res.data
          }catch(err){
              console.log( 'err ---- ', err );    
              return {  Success : false }  
          }   
     }
  
   async cancel(){  // 取消预约取件
       let { ctx, app, config, logger, service } = this;
       let { id, ...others } = ctx.request.body;
         /**
          *  在测试环境下，无法识别 1004 接口指令；
          */
       let param = {
                  RequestType : 1004,
                  EBusinessID,
                  RequestData : encodeURIComponent( JSON.stringify( others ) ),
                  DataSign : encrypt( JSON.stringify( others ) ),
                  DataType : 'json' 
                  
            };
       try{
           let res = await ctx.curl( ReqURL, {
                    method: 'POST',
                    dataType: 'json',
                    data : param,
           });
           return  res.data
       }catch(err){
           console.log( 'err ---- ', err );    
           return {  Success : false }  
       }
  }

}


module.exports = KdnService;