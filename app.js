const util = require('./app/util');

module.exports = app => {
    app.util = util;
    app.once('server', server => {
        // websocket
      });
      app.on('error', (err, ctx) => {
        // report error
      });
      app.on('request', ctx => {
          ctx.util = util;
        // log receive request
      });
      app.on('response', ctx => {
           ctx.util = util;
        // ctx.starttime is set by framework
      });
}