const express = require('express');
const router = express.Router();
const CourseOnlineController = require('../controllers/CourseOnlineController');

router.post('/createOnline/:id',CourseOnlineController.createOnlineCourse)
router.get('/getAll/:id', CourseOnlineController.getCourses);
router.get('/getAllCourse', CourseOnlineController.getAllCourses);
router.get('/getDetailsCourse/:name', CourseOnlineController.getCourseByName);

module.exports = router;