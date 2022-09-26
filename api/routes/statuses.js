var express = require('express');
var router = express.Router();
var { Status } = require('../models');

router.get('/', (req, res, next) => {
  Status.findAll({
    attributes: ['id', 'description']
  }).then((data) => {
    res.json(data);
  });
});

module.exports = router;
