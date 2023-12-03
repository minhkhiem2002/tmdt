const mongoose = require('mongoose');

const coursePostSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        subject: { type: String, required: true },
        method: { type: String, required: true },
        location: { type: String, required: true },
        requirements: { type: String, required: true },
        salary: { type: String, required: true },
        teachersContacted: [
            {
                teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
                contactStatus: { type: Boolean, default: false }, 
            }
        ],
        statusPost: {type: Boolean, required: true, default: false},
        selectedTeacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    {
        timestamps: true,
    }
);

const CoursePost = mongoose.model('CoursePost', coursePostSchema);

module.exports = CoursePost;
