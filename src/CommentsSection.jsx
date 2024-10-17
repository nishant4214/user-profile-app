import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CommentsSection.css'
import { Paper, Box, Typography } from '@mui/material';

const CommentsSection = ({ projectId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const fetchComments = async () => {
    const response = await axios.get(`https://profile-api-nishant.netlify.app/.netlify/functions/Comments?projectId=${projectId}`);
    setComments(response.data);
  };

  useEffect(() => {
    // Fetch comments when the component mounts
  
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
        fetchComments(); // Fetch updated comments after submitting

    } catch (error) {
        console.error('Error submitting comment:', error);
        alert('Failed to submit comment. Please try again.');
    }
  };

  return (
    <Paper 
            style={{
            backgroundColor: 'transparent',
            padding: '20px'
            }}
            elevation={2}>
      <Typography color='blue' variant="h4" align="left" gutterBottom>
        Comments
      </Typography>
        <Box sx={{ overflowX: 'scroll' }}>

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
            {comments
              .slice() // Create a shallow copy of the comments array
              .reverse() // Reverse the order of the comments
              .map((comment, index) => (
                <li key={index}>
                  <strong>{comment.users?.username || 'Unknown User'}</strong>: {comment.comment_text || comment}
                </li>
              ))}
          </ul>
      </Box>
  </Paper>
  );
};

export default CommentsSection;
