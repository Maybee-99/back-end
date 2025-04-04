const mysql2 = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql2.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


// Test the database connection
(async () => {
    try {
        const connection = await db.getConnection(); // Get a connection from the pool
        console.log('Connected to the MySQL database successfully!');
        connection.release(); // Release the connection back to the pool
    } catch (err) {
        console.error('Failed to connect to the MySQL database:', err.message);
    }
})();

module.exports = db;