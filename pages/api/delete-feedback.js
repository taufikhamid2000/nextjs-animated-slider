// /pages/api/delete-feedback.js
import db from '../../lib/database';

export default function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.body;

    db.run('DELETE FROM feedback WHERE id = ?', [id], function (err) {
      if (err) {
        res.status(500).json({ error: 'Failed to delete feedback' });
      } else {
        res.status(200).json({ message: 'Feedback deleted successfully!' });
      }
    });
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
