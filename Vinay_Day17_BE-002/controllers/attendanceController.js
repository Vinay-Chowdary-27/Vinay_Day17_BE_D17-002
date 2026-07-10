const attendanceModel = require('../models/attendanceModel');

const getAttendance = async (req, res, next) => {

    try {

        const status = req.query.status || '';
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const attendance =
            await attendanceModel.filterAttendance(
                status,
                page,
                limit
            );

        res.status(200).json({
            success: true,
            message: 'Attendance fetched successfully',
            data: attendance
        });

    } catch (error) {
        next(error);
    }
};

module.exports = { getAttendance };