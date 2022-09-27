var express = require('express');
var router = express.Router();
var { Task, Status } = require('../models');

router.get('/', async (req, res) => {
  const tasks = await Task.findAll({
    attributes: ['id', 'description', 'statusId']
  });

  // TODO: improve iteration for performance purposes.
  res.json({
    do: tasks.filter(task => task.statusId === Status.Do),
    doin: tasks.filter(task => task.statusId === Status.Doin),
    done: tasks.filter(task => task.statusId === Status.Done),
  });
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
    res.status(500).json({message: err});
  }

});

router.delete('/:id', async (req, res) => {
  try {
    const deletingTask = await Task.findByPk(req.params.id);
    await deletingTask.destroy();

    res.json({message: `The task "${deletingTask.description}" was successfully deleted.`});
  } catch(err) {
    res.status(500).json({message: err});
  }
});

module.exports = router;
