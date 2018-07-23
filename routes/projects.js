var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('projects', { domain: 'IDP Architects - ', title: 'Projects', layout: 'layout.hbs' });
});
router.get('/project1', function(req, res, next) {
  res.render('project1', { domain: 'IDP Architects - ', title: 'Projects', subtitle:'Project1', project: true, layout: 'layout.hbs' });
});

module.exports = router;
