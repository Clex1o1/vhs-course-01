const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Create a new database connection
const db = new sqlite3.Database(path.join(__dirname, "database.sqlite"));

// Initialize the database with tables
function initializeDatabase() {
  db.serialize(() => {
    // Create users table
    db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

    // Create posts table
    db.run(`CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            user_id INTEGER,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )`);

    console.log("Database tables created successfully");
  });
}

// Insert some sample data
function insertSampleData() {
  db.serialize(() => {
    // Insert sample users
    db.run(`INSERT OR IGNORE INTO users (name, email) VALUES 
            ('John Doe', 'john@example.com'),
            ('Jane Smith', 'jane@example.com')`);

    // Insert sample posts
    db.run(`INSERT OR IGNORE INTO posts (title, content, user_id) VALUES 
            ('First Post', 'This is the content of the first post', 1),
            ('Second Post', 'This is the content of the second post', 2)`);

    console.log("Sample data inserted successfully");
  });
}

// Export the database instance and initialization functions
module.exports = {
  db,
  initializeDatabase,
  insertSampleData,
};
