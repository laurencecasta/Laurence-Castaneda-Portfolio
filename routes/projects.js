const express = require('express'),
cors = require('cors'),
router = express.Router(),
projects = require('../controllers/projects'),
contactEmail = require('../controllers/contact-email');

router.get('/projects/', cors(), projects.get_projects);
router.get('/projects/pages', cors(), projects.get_projects_page);
router.post('/contact-email/', cors(), contactEmail.validate('contactSubmission'), contactEmail.post_email);
// router.post('/projects/', cors(), projects.post_projects)

module.exports = router;