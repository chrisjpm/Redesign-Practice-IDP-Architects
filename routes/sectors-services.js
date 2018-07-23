var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('sectors-services', { domain: 'IDP Architects - ', title: 'Sectors/Services', layout: 'layout.hbs' });
});

module.exports = router;
