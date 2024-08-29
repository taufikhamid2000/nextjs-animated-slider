// /pages/api/feedback.js
import db from '../../lib/database';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Insert feedback into the database
    db.run(
      'INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)',
      [name, email, message],
      function (err) {
        if (err) {
          console.error('Error inserting data: ', err.message);
          res.status(500).json({ error: 'Failed to submit feedback.' });
        } else {
          res.status(200).json({ message: 'Feedback submitted successfully!' });
        }
      }
    );
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
