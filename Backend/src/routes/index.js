const UserRouter = require('./UserRouter')
const CourseRouter = require('./CourseRouter')
const paymentRoutes = require('./paymentRoutes')

const routes = (app) => {

    app.use('/api/user', UserRouter)
    app.use('/api/teacher', CourseRouter)
    app.use('/api/payment', paymentRoutes);

}

module.exports = routes;