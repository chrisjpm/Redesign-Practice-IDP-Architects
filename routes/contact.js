var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('contact', { domain: 'IDP Architects - ', title: 'Contact', layout: 'layout.hbs' });
});

module.exports = router;
