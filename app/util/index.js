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
    secret( string, operation = 'encrypt' ){
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
              // 判断是否有反向代理 IP
              let ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'];
             return ip || ''
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
      },
  
      
deepCopy( obj ){
  let newObject = {};
  if( Array.isArray( obj ) || !this.isValid( obj ) ) return newObject;
  Object.keys(obj).forEach( key => {
      if( typeof obj[key] == 'object' && obj[key] !== null ){
           if( obj[key] instanceof Array ){
             newObject[key] = [];
             obj[key].forEach(( _obj, index ) =>{
                 if( typeof _obj == 'object' && _obj !== null  ){
                       newObject[key][index] = this.deepCopy( _obj );
                 }else{
                      newObject[key][index] = _obj;
                 }   
             })

           }else{
             if( typeof obj[key] == 'object' && obj[key] !== null  ){
                    newObject[key] = this.deepCopy( obj[key] );
             }else{
                  newObject[key] = obj[key];
             }
         
           }
      }else{
         newObject[key] = obj[key];
      }
 })
 return newObject
},

deepCopyArray( arr ){
    var newArry = [];
    if( Array.isArray( arr ) || !this.isValid( arr ) ){
      arr.forEach( item => {
          if( Array.isArray( item ) ){
              newArry.push( this.deepCopyArray( item ) ); 
          }else{
              newArry.push( this.deepCopy( item ) ); 
          }
      })
   }
  return newArry
},

isUrl(path) {
  const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;
  return reg.test(path)
},

transformUrl( rows, key, multiple = false ){
     try{  
       let f = ( row, key ) => {
          if( this.isValid( row[key] ) ){ 
               if( multiple ){
                let urls = row[key].split(',');
                    urls.forEach( u => {
                         if( !Array.isArray(  row[key] ) )  row[key] = [];
                         u && row[key].push( u.replace(/\\/g,"\/")  )  
                    })
               }else{
                let url = row[key].split(',')[0];
                row[key] = url.replace(/\\/g,"\/") ;  
               }
          }
      };
      rows.forEach( row => {   
        if( Array.isArray( key ) ){
          key.forEach( k =>{ f( row, k ) })
        }else{
              f( row, key )
        }
  });
     }catch(err){
         console.log(err)
     }
   
    return rows
}



  

}
