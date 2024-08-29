// /lib/database.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Define the path to the SQLite database
const dbPath = path.resolve(process.cwd(), 'feedback.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database ' + err.message);
  } else {
    db.run(
      'CREATE TABLE IF NOT EXISTS feedback (id INTEGER PRIMARY KEY, name TEXT, email TEXT, message TEXT)',
      (err) => {
        if (err) {
          console.error('Error creating table ' + err.message);
        }
      }
    );
  }
});

module.exports = db;
