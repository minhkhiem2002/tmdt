const CoursePostService = require("../services/CoursePostService");

const creatCourse = async (req, res) => {
  try {
    const response = await CoursePostService.creatCourse(req.body);
    return res.status(response.status).json(response.data);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const createContact = async (req, res) => {
  try {
    const { postId, teacherId } = req.body;
    const response = await CoursePostService.createContact(postId, teacherId);
    return res.status(response.status).json(response.data);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const selectContact = async (req, res) => {
  try {
    const { postId, teacherId } = req.body;
    const response = await CoursePostService.selectContact(postId, teacherId);
    // return res.status(response.status).json(response.data);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
const getAllCoursePosts = async (req, res) => {
  try {
    const response = await CoursePostService.getAllCoursePosts();
    return res.status(response.status).json(response.data);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
module.exports = { 
  creatCourse, 
  createContact, 
  selectContact, 
  getAllCoursePosts 
};
