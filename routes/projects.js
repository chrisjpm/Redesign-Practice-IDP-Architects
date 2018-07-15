var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('projects', { domain: 'IDP Architects - ', title: 'Projects', home: false, layout: 'layout.hbs' });
});

module.exports = router;
