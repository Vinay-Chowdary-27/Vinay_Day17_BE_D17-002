const pool = require('../config/db');

const searchEmployees = async (search, page, limit) => {

    const offset = (page - 1) * limit;

    const result = await pool.query(
        `SELECT * FROM employees
         WHERE name ILIKE $1
         OR department ILIKE $1
         LIMIT $2 OFFSET $3`,
        [`%${search}%`, limit, offset]
    );

    return result.rows;
};

module.exports = { searchEmployees };