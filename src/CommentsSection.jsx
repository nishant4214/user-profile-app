import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './CommentsSection.css'
import { Paper, Box, Typography } from '@mui/material';

const CommentsSection = ({ projectId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [emailId, setEmailId] = useState('');
  const [userName, setUserName] = useState('');
  const [userMobileNumber, setUserMobileNumber] = useState('');

  // const fetchComments = useCallback(async () => {
  //   try {
  //     const response = await axios.get(`https://profile-api-nishant.netlify.app/.netlify/functions/Comments?projectId=${projectId}`);
  //     setComments(response.data);
  //   } catch (error) {
  //     console.error('Error fetching comments:', error);
  //   }
  // }, [projectId]);

  // useEffect(() => {
  //   // Fetch comments when the component mounts
  
  //   fetchComments();
  // }, [fetchComments]);
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    const newComment = { projectId, commentText:commentText,emailId:emailId,userName:userName,userMobileNumber:userMobileNumber };
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
        setUserName(''); // Clear input
        setEmailId(''); // Clear input
        setUserMobileNumber(''); // Clear input
        setCommentText(''); // Clear input
        // fetchComments(); // Fetch updated comments after submitting

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
        Enquiry
      </Typography>
        <Box sx={{ overflowX: 'scroll' }}>

            <form className="comment-form" onSubmit={handleCommentSubmit}>
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name..."
                required
              />
              <br/>
              <input
                className='input'
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                placeholder="Enter your email id..."
                type='email'
                required
              />
              <br/>
              <input
                value={userMobileNumber}
                onChange={(e) => setUserMobileNumber(e.target.value)}
                placeholder="Enter your mobile number..."
                maxLength={15}
                required
              />
              <br/>
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
