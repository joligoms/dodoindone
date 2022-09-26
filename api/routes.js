var indexRouter = require('./routes/index');
var statusesRouter = require('./routes/statuses');

const load = (app) => {
  app.use('/', indexRouter);
  app.use('/statuses', statusesRouter);
}

exports.load = load;