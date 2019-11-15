const util = require('./app/util');
const sql = require('./app/util/sql');

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
          ctx.sql = sql.bind( ctx );

        // log receive request
      });
      app.on('response', ctx => {
           ctx.util = util;
           ctx.sql = sql.bind( ctx );
        // ctx.starttime is set by framework
      });
}