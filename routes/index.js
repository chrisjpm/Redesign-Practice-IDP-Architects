var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { domain: 'IDP - ', title: 'Home', home: true, layout: 'layout.hbs' });
});

module.exports = router;
