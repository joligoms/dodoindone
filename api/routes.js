var indexRouter = require('./routes/index');
var statusesRouter = require('./routes/statuses');
var tasksRouter = require('./routes/tasks');

const load = (app) => {
  app.use('/', indexRouter);
  app.use('/statuses', statusesRouter);
  app.use('/tasks', tasksRouter);
}

exports.load = load;