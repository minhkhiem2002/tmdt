const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true,unique: true},
        password: {type: String, required: true},
        rePassword: {type: String},
        role: {type: String, required: true},
        phone: { type: String, required: true},
        date: {type: String},
        access_token: {type: String},
        refresh_token: {type: String},
        avatar: {type: String},
        onlineCourse: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OnlineCourse' ,unique: false}],
        postCourse: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CoursePost' ,unique: false}],
        passwordResetCode: { type: String },
        isRightCode: {type: String},
    },
    {
        timestamps: true
    }
)
const User = mongoose.model("User", userSchema);
module.exports = User;