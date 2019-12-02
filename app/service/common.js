const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');
const fs = require('fs');
const path = require('path');
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');
const dayjs = require('dayjs');


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

    // 上传单个文件
   async uploadFile( category = '' ){
      let { ctx, app, config, logger, service } = this;
          const stream = await ctx.getFileStream();
         // 上传目录
        const basePath = 'public/uploads';
         // *******!!!名字不可换行!!!****
        const filename = `${Date.now()}${ Number.parseInt( Math.random() * 1000 )}${ path.extname( stream.filename ).toLocaleLowerCase() }`;
        const dirname = dayjs(Date.now()).format('YYYY-MM-DD');
        // 创建文件夹
        const mkdirsSync = dirname => {
              if( fs.existsSync( dirname ) ) return;
                fs.mkdirSync( dirname )
        }
        mkdirsSync( path.join( basePath, category, dirname ));
        const target = path.join( basePath, category, dirname, filename );
        // 可写流
       const writestream = fs.createWriteStream( target );
        try{
            await awaitWriteStream( stream.pipe( writestream ) );
        }catch( err ){
           // ******* !!消费掉文件流，关闭管道。!!!******
           await sendToWormhole( stream );
           // 打印失败日志
          // logger.warn( err );
           return {
               state : false,
               message : '上传失败'
           }
        }finally{
          // ****** !!删除临时上载文件 !!*******
            await ctx.cleanupRequestFiles();
        }
       return {
           state : true,
           message : '上传成功',
           fields : stream.fields,
           url : path.join( '/public/uploads', category, dirname, filename),
       }
   }


   // 上传多张图片
  // 上传多个文件参考地址 https://github.com/eggjs/examples/blob/master/multipart-file-mode/app/controller/multiple.js
  async uploadMultipleFile( category ){
         let { ctx, app, config, logger, service } = this,
             rest = {
                state : true,
                message : '上传成功',
                fields :  {},
                urls : []
             },
             parts = ctx.multipart(),
             part;
            while ((part = await parts()) != null) {
                 if( part.length ){  // 非文件流字段
                      rest.fields[ part[0] ] = part[1];
                 }else{ // 文件流
                     if (!part.filename) return { state : false,  message : '上传文件为空' };
                        // part 是上传的文件流
                        //  console.log('field: ' + part.fieldname);
                        //  console.log('filename: ' + part.filename);
                        //  console.log('encoding: ' + part.encoding);
                        //  console.log('mime: ' + part.mime);
                        // 上传目录
                       const basePath = 'public/uploads';
                          // *******!!!名字不可换行!!!****
                        const filename = `${Date.now()}${ Number.parseInt( Math.random() * 1000 )}${ path.extname( part.filename ).toLocaleLowerCase() }`;
                        const dirname = dayjs(Date.now()).format('YYYY-MM-DD');
                        // 创建文件夹
                        const mkdirsSync = dirname => {
                              if( fs.existsSync( dirname ) ) return;
                                fs.mkdirSync( dirname )
                        }
                        mkdirsSync( path.join( basePath, category, dirname ));
                        const target = path.join( basePath, category, dirname, filename );
                        // 可写流
                       const writestream = fs.createWriteStream( target );
                        try{
                           await awaitWriteStream( part.pipe( writestream ) );
                           rest.urls.push( path.join( '/public/uploads', category, dirname, filename) );
                        }catch( err ){
                            // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
                            await sendToWormhole(part);
                            rest.state = false;
                            rest.message = '上传失败';
                        }

                 }
          }
        // end of while 
        // ****** !!删除临时上载文件 !!*******
          await ctx.cleanupRequestFiles();
          return rest

  }


}


module.exports = CommonService;


