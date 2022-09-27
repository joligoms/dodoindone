var express = require('express');
var router = express.Router();
var { Task, Status } = require('../models');

router.get('/', async (req, res) => {
  const tasks = await Task.findAll({
    attributes: ['id', 'description', 'statusId']
  });
  res.json(tasks);
});

router.post('/', async (req, res, next) => {
  const newTask = req.body.newTask;

  try {
    await Task.sync();

    const {id, description, statusId} = await Task.create({ 
      description: newTask,
      statusId: Status.Do
    });

    const createdTask = {id, description, statusId};

    res.json(createdTask);
  } catch(err) {
    res.status(500).send(err);
  }

});

module.exports = router;
