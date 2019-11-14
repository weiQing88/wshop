const CryptoJS = require('crypto-js');
const bcrypt = require('bcryptjs');


// 检测传入的参数类型； 【 'undefined','object', 'number', 'string', 'boolean' 、'function' 】
function checkType(target, hook = undefined) {
    var type = typeof target;
    var flag = true; // 默认是正确类型
  
    var handleFunction = function() {
      // 提供外部处理方法
      hook && (flag = hook(false) || false);
    };
  
    var HandleObjectType = function() {
      // Object 、 Array、 null
      if (target instanceof Object) {
        // 如果不是 null
        if (target instanceof Array) {
          // 如果是数组
          handleArray();
        } else {
          handleObject();
        }
      } else {
        flag = false;
      }
    };
  
    var handleObject = function() {
       try{
          if (JSON.stringify(target) == "{}") flag = false;
       }catch(  error ){
          console.log(error )
       }
    
    };
  
    var handleArray = function() {
      if (target.length <= 0) flag = false;
    };
  
    var handleBoolean = function() {
      hook && (flag = hook(false) || false);
    };
  
    var handleString = function() {
      if (target.trim() === "") flag = false;
  
      hook && (flag = hook(false) || false);
    };
  
    var handleNumber = function() {
      hook && (flag = hook(false) || false);
    };
  
    switch (type) {
      case "undefined":
        flag = false;
        break;
      case "number":
        handleNumber();
        break;
      case "boolean":
        handleBoolean(); // null 也是 object 类型
        break;
      case "object":
        HandleObjectType(); // 区分Object 、 Array、 null
        break;
      case "string":
        handleString();
        break;
      case "function":
        handleFunction();
        break;
    }
  
    return flag;
  }
  


module.exports = {
    secretkey : 'wshop_201911141230034_5459',
    //加/解密
    secret( string, operation = false ){
            var res = ''; 
            if( operation ){
                res = CryptoJS.AES.decrypt( string , this.secretkey ).toString(CryptoJS.enc.Utf8);
            // console.log("解密结果："+ res );
            }else{
                res = CryptoJS.AES.encrypt( string , this.secretkey ).toString();
            // console.log("加密结果"+ res );
            }
            return res
        },
      // 用时间创建唯一id
     uidGenerator(){ 
            // var uid = Math.floor(new Date().valueOf() * Math.random()
            var date = new Date();
            var components = [
                date.getYear(), 
                date.getMonth(),
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds(),
                date.getMilliseconds()
            ];
        return components.join("")
        },
       getClientIP( req ){
        return req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
                req.headers['x-real-ip']
       },
      currentDate(){
          var myDate = new Date(),
               year =  myDate.getFullYear(), //获取完整的年份(4位,1970-????)
               month =  myDate.getMonth() + 1, //获取当前月份(0-11,0代表1月)
                date =  myDate.getDate(), //获取当前日(1-31)
                 week = myDate.getDay(), //获取当前星期X(0-6,0代表星期天)
                  hours =  myDate.getHours(), //获取当前小时数(0-23)
                  minute = myDate.getMinutes(), //获取当前分钟数(0-59)
                   second =  myDate.getSeconds(); //获取当前秒数(0-59)
            return year + '-' + month + '-' + date + ' ' + hours + ':' + minute + ':' + second
             
      },


        // 类型验证; 空值、 undefined、 null都会返回 false。 【object、 string、 number、 boolean、 空值、 undefined、 null】
  isValid(target) {
    return checkType(target);
  },



  isNumber(target) {
    let f = checkType(target);
    if (f) {
      isNaN( target ) ? (f = false) : (f = true);
    }
    return f;
  },

  isObject(target) {
    let f = checkType(target);
    if (f) {
      if (!(target instanceof Array) && target instanceof Object) {
        f = true;
      } else {
        f = false;
      }
    }
    return f;
  },

  isArray( target ){
      let f = checkType(target);
      if (f) {
        if ( target instanceof Object && target instanceof Array ) {
          f = true;
        } else {
          f = false;
        }
      }
      return f;
  },

      tohash( str ){  // 加密
          if( !this.isValid( str ) ) return;
            return bcrypt.hashSync( str , bcrypt.genSaltSync(12));
      },
      tocheck( str, hash ){ // 对比加密
          if( !this.isValid( str ) ) return false; 
          try{
               return bcrypt.compareSync(str, hash); 
          }catch(e){
               console.error( e )
               return false;
          }
      }


}
