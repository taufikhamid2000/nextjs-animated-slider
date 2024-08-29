// /pages/api/update-feedback.js
import db from '../../lib/database';

export default function handler(req, res) {
  if (req.method === 'PUT') {
    const { id, name, email, message } = req.body;

    db.run(
      'UPDATE feedback SET name = ?, email = ?, message = ? WHERE id = ?',
      [name, email, message, id],
      function (err) {
        if (err) {
          res.status(500).json({ error: 'Failed to update feedback' });
        } else {
          res.status(200).json({ message: 'Feedback updated successfully!' });
        }
      }
    );
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
