const mongoose = require('mongoose');

const onlineCourseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    students: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const OnlineCourse = mongoose.model('OnlineCourse', onlineCourseSchema);
module.exports = OnlineCourse;
