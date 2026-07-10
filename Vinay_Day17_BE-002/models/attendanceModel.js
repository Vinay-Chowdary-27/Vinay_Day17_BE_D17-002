const pool = require('../config/db');

const filterAttendance = async (status, page, limit) => {

    const offset = (page - 1) * limit;

    const result = await pool.query(
        `SELECT * FROM attendance
         WHERE status ILIKE $1
         LIMIT $2 OFFSET $3`,
        [`%${status}%`, limit, offset]
    );

    return result.rows;
};

module.exports = { filterAttendance };