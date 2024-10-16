import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CommentsSection.css'

const CommentsSection = ({ projectId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    // Fetch comments when the component mounts
    const fetchComments = async () => {
      const response = await axios.get(`https://profile-api-nishant.netlify.app/.netlify/functions/Comments?projectId=${projectId}`);
      setComments(response.data);
    };

    fetchComments();
  }, [projectId]);
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const newComment = { projectId, userId: 1, commentText:commentText };
    try 
    {
        const response = await fetch('https://profile-api-nishant.netlify.app/.netlify/functions/setComment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newComment),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setComments([...comments, data.comment]); // Update state
        setCommentText(''); // Clear input
    } catch (error) {
        console.error('Error submitting comment:', error);
        alert('Failed to submit comment. Please try again.');
    }
  };

  return (
    <div className="comments-section">
    <h3>Comments</h3>
    <form className="comment-form" onSubmit={handleCommentSubmit}>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Leave a comment"
        required
      />
      <button type="submit">Submit</button>
    </form>
    <ul className="comments-list">
      {comments.map((comment, index) => (
        <li key={index}>
          <strong>{comment.users?.username || 'Unknown User'}</strong>: {comment.comment_text}
        </li>
      ))}
    </ul>

  </div>
  );
};

export default CommentsSection;
