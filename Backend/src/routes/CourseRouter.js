const express = require("express");
const router = express.Router();
const CourseOnlineController = require("../controllers/CourseOnlineController");
const CoursePostController = require("../controllers/CoursePostController");

router.post("/createOnline/:id", CourseOnlineController.createOnlineCourse);
router.get("/getAll/:id", CourseOnlineController.getCourses);
router.get("/getAllCourse", CourseOnlineController.getAllCourses);
router.get("/getDetailsCourse/:name", CourseOnlineController.getCourseByName);

router.get("/getAllCoursePosts", CoursePostController.getAllCoursePosts);
router.post("/createPostCourse", CoursePostController.creatCourse);
router.post("/createContact", CoursePostController.createContact);
router.post("/selectContact", CoursePostController.selectContact);

module.exports = router;
