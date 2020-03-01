/* eslint valid-jsdoc: "off" */
'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/


  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  // appInfo.name + '_1570936314744_5024';
  config.keys = 'wshop_201911141230034_5459'

  // add your middleware config here
  config.middleware = [ ];

   // 快递鸟API测试地址：
  config.kdnApi = 'http://sandboxapi.kdniao.com:8080/kdniaosandbox/gateway/exterfaceInvoke.json';

  // add your user config here
  const userConfig = {
      static : {
         prefix : '/public',
         dir : [ path.join( appInfo.baseDir, 'public' ) ], // 多静态文件入口
      },
      bodyParser: {
        jsonLimit: '6mb',
        formLimit: '6mb',
        textLimit : '6mb'
      },
      session : { 
          key: 'WSHOP_SESS',
          maxAge: 24 * 3600 * 1000, // 1 天
          httpOnly: true,
          encrypt: true,
        // renew: true,
      },
      redis : {
          client : {
              host : '127.0.0.1',
             // host : 'redis',
              port : '6379',
              password : '',
              db : 0
          },
        agent : true
      },

      multipart : {
         fileSize: '50mb', // 最大字段值大小（字节），默认为100kb
         fields : '30', // 最大非文件字段数，默认为10
         mode: 'stream',
         fileExtensions: ['.xls', '.txt'], 
      },
      jwt : {
        secret : 'wshop_201911141230034_5459'
      },
      statuscode: {
          failure : 406,
          success : 200
      },
      myAppName: 'wshop',
      security : {
          domainWhiteList : ['*'],
          methodnoallow: {
            enable: false,
          },
          xframe: {
            enable: false,
          },
          csrf: {
            enable: false,
            headerName: 'x-csrf-token',
            ignoreJSON: false,
          },
    },


  };


  config.sequelize = {
      dialect: 'mysql',
       host: '127.0.0.1',
     // host: 'mysql',
      port: 3306,
      database: 'wshop',
      username: 'root',
      password: 'root',
      define: {  // model的全局配置
        timestamps: true,   // 添加create,update,delete时间戳
      //  paranoid: true,   // 添加软删除
        freezeTableName: true,  // 防止修改表名为复数
        underscored: false  // 防止驼峰式字段被默认转为下划线
    },
   // timezone: '+8:00',  // 由于orm用的UTC时间，这里必须加上东八区，否则取出来的时间相差8小时
    dialectOptions: {  // 让读取date类型数据时返回字符串而不是UTC时间
        dateStrings: true,
        typeCast(field, next) {
            if (field.type === "DATETIME") {
                return field.string();
            }
            return next();
        }
    }
    };

  return {
    ...config,
    ...userConfig,
  };


};
