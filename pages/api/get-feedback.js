// /pages/api/get-feedback.js
import db from '../../lib/database';

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch all feedback entries from the database
    db.all('SELECT * FROM feedback', [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: 'Failed to retrieve feedback' });
      } else {
        res.status(200).json(rows);
      }
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
