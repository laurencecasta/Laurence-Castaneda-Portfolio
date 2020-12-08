const express = require('express'),
cors = require('cors'),
router = express.Router(),
projects = require('../controllers/projects');

router.get('/projects/', cors(), projects.get_projects);
router.get('/projects/pages', cors(), projects.get_projects_page);
// router.post('/projects/', cors(), projects.post_projects)

module.exports = router;