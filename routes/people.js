var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('people', { domain: 'IDP Architects - ', title: 'People', home: false, layout: 'layout.hbs' });
});

module.exports = router;
