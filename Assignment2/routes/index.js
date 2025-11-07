var express = require('express');
var router = express.Router();


/* Home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


/* About page */
router.get('/about', function(req, res, next) {
  res.locals.title = 'About Me';
  res.render('about');
});


/* Projects page */
router.get('/projects', (req, res) => {
  res.locals.title = 'Projects';
  res.render('projects');
});


/* Contact page */
router.get('/contact', (req, res) => {
  res.locals.title = 'Contact Me';
  res.render('contact');
});


module.exports = router;