module.exports = appInfo => {
    const config = exports = {};
   // 快递鸟API正式地址：
    config.kdnApi = 'http://api.kdniao.com/api/OOrderService';
    config.cluster = {
        listen: {
            port: 7001,
            hostname: '127.0.0.1', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
          }
    };


  // config.alinode = {
  //       appid : 83406,
  //       secret : 'a82fa56f3509cf12b159dd02bd2f815168bdacde'   
  // };




    
    return config
}