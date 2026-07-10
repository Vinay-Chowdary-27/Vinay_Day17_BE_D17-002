const employeeModel = require('../models/employeeModel');

const searchEmployee = async (req, res, next) => {

    try {

        const search = req.query.search || '';
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const employees = await employeeModel.searchEmployees(
            search,
            page,
            limit
        );

        res.status(200).json({
            success: true,
            message: 'Employees fetched successfully',
            data: employees
        });

    } catch (error) {
        next(error);
    }
};

module.exports = { searchEmployee };