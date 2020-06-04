var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/public/index', { pageTitle: 'Publish Page' });
});

module.exports = router;
