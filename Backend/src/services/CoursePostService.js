const mongoose = require("mongoose");
const CoursePostModel = require("../models/CoursePostModel");
const UserModel = require("../models/UserModel.js");
const creatCourse = async (data) => {
  try {
    const user = await UserModel.findOne({ _id: data.userId });
    console.log(user);
    const createCourse = await CoursePostModel.create({
      ...data,
      userId: new mongoose.Types.ObjectId(data.userId),
    });
    if (createCourse) {
      return {
        status: 201,
        message: "Create Course Successfully",
        data: { user, createCourse },
      };
    }
  } catch (error) {
    console.log(error);
  }
};
const createContact = async (postId, teacherId) => {
  try {
    const id = postId;
    const newContact = await CoursePostModel.findByIdAndUpdate(
      id,
      {
        $push: {
          teachersContacted: {
            teacherId: new mongoose.Types.ObjectId(teacherId),
            contactStatus: false,
          },
        },
      },
      { safe: true, upsert: true }
    );
    if (newContact) {
      return {
        status: 201,
        message: "Create Course Successfully",
        data: { newContact },
      };
    }
  } catch (error) {
    console.log(error);
  }
};
const selectContact = async (postId, teacherId) => {
  try {
    const id = postId;
    const _teacherId = new mongoose.Types.ObjectId(teacherId);
    const _selectContact = await CoursePostModel.findByIdAndUpdate(
      {
        postId,
        // "teachersContacted.teacherId": _teacherId,
      },
      {
        $set: {
          //   teachersContacted: { contactStatus: true },
          statusPost: true,
          selectedTeacherId: _teacherId,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );
    console.log(_selectContact);
    if (_selectContact) {
      return {
        status: 201,
        message: "Create Course Successfully",
        data: { _selectContact },
      };
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { creatCourse, createContact, selectContact };
