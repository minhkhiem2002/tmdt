const CourseOnlineService = require('../services/CourseOnlineService');

const createOnlineCourse = async (req, res) => {
    try {
        const teacherId = req.params.id;
        const {name, image, price} = req.body;
        if (!name || !image ||!price) {
            return res.status(401).json({
                status: 401,
                message: 'Invalid input data'
            })
        }

        const response = await CourseOnlineService.createOnlineCourse(teacherId, {
            name,
            image,
            price
          });
          
        return res.status(response.status).json(response);
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            message: 'Internal Server Error',
            error: error.message,
        });
    }
}

const getCourses = async (req, res) => {
    try {
        console.log("aaa")
        const teacherId = req.params.id;

        if (!teacherId) {
            return res.status(400).json({
                status: 400,
                message: 'Invalid teacherId',
            });
        }

        const response = await CourseOnlineService.getCourses(teacherId);
        return res.status(response.status).json(response);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};

const getAllCourses = async (req, res) => {
    try {
      const response = await CourseOnlineService.getAllCourses();
      return res.status(response.status).json(response);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: 'Internal Server Error',
        error: error.message,
      });
    }
  };

  const getCourseByName = async (req, res) => {
    try {
      const courseName = req.params.name;
  
      if (!courseName) {
        return res.status(400).json({
          status: 400,
          message: 'Invalid course name',
        });
      }
  
      const response = await CourseOnlineService.getCourseByName(courseName);
      return res.status(response.status).json(response);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: 'Internal Server Error',
        error: error.message,
      });
    }
  };


module.exports = {
    createOnlineCourse,
    getCourses,
    getAllCourses,
    getCourseByName
}