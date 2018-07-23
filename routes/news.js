var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('news', { domain: 'IDP Architects - ', title: 'News', layout: 'layout.hbs' });
});

module.exports = router;
