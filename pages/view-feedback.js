// /pages/view-feedback.js
import { useState, useEffect } from 'react';
import Header from '../components/Header'; // Import the Header component

const ViewFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch feedback data from the API
    fetch('/api/get-feedback')
      .then((response) => response.json())
      .then((data) => {
        setFeedbacks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching feedback:', error);
        setLoading(false);
      });
  }, []);

  // Add the functions here, inside the component

  // Function to handle editing (you can expand this function later)
  const handleEdit = (feedback) => {
    // This function will handle editing feedback; currently just a placeholder
    alert(`Edit feedback for: ${feedback.name}`);
    // Implement a form to update feedback and call update API when ready
  };

  // Function to handle deleting
  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this feedback?')) {
      try {
        const response = await fetch('/api/delete-feedback', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
        });

        if (response.ok) {
          alert('Feedback deleted successfully!');
          setFeedbacks(feedbacks.filter((f) => f.id !== id));
        } else {
          alert('Failed to delete feedback.');
        }
      } catch (error) {
        console.error('Error deleting feedback:', error);
      }
    }
  };

  // Continue with the rendering of the component
  if (loading) {
    return <p>Loading feedback...</p>;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4 mt-20">Submitted Feedback</h1>
        {feedbacks.length > 0 ? (
          <ul className="space-y-4">
            {feedbacks.map((feedback) => (
              <li key={feedback.id} className="p-4 bg-white border rounded shadow-sm">
                <p><strong>Name:</strong> {feedback.name}</p>
                <p><strong>Email:</strong> {feedback.email}</p>
                <p><strong>Message:</strong> {feedback.message}</p>

                {/* Buttons for Edit and Delete */}
                <button
                  onClick={() => handleEdit(feedback)}
                  className="mt-2 mr-2 px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(feedback.id)}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No feedback submitted yet.</p>
        )}
      </div>
    </>
  );
};

export default ViewFeedback;
