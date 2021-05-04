var express = require('express');
var router = express.Router();
// const { data_login } = require('./models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dashboard' });
});

module.exports = router;
