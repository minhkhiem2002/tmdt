const CourseOnline = require('../models/CourseOnlineModel.js');

const createOnlineCourse = async (teacherId, newCourse) => {
  try {
    console.log('teacherId:', teacherId);
    const { name, image, price } = newCourse;

    // Kiểm tra xem khóa học đã tồn tại chưa
    const checkCourse = await CourseOnline.findOne({ name });
    if (checkCourse !== null) {
      return {
        status: 401,
        message: 'The course already exists',
      };
    }

    // Tạo mới khóa học
    const createCourse = await CourseOnline.create({
      name,
      image,
      price,
      teacherId,
    });
    if (createCourse) {
    const onlineCourses = await CourseOnline.find({ teacherId: teacherId });
    console.log('OnlineCourses:', onlineCourses);
      return {
        status: 200,
        message: 'Create Course Successfully',
        data: createCourse,
      };
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const getCourses = (teacherId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const course = await CourseOnline.find({ teacherId });

            resolve({
                status: 200,
                message: 'Get courses successfully',
                data: course,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const getAllCourses = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const courses = await CourseOnline.find({});
        resolve({
          status: 200,
          message: 'Get all courses successfully',
          data: courses,
        });
      } catch (error) {
        reject(error);
      }
    });
  };
  const getCourseByName = (courseName) => {
    return new Promise(async (resolve, reject) => {
      try {
        const course = await CourseOnline.findOne({ name: courseName }).populate('students.userId', 'name email phone');
        resolve({
          status: 200,
          message: 'Get course details successfully',
          data: course,
        });
      } catch (error) {
        console.error(error);
        reject({
          status: 500,
          message: 'Internal Server Error',
        });
      }
    });
  };
  

module.exports = {
  createOnlineCourse,
  getCourses,
  getAllCourses,
  getCourseByName
};
