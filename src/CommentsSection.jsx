import React, { useState } from 'react';
import axios from 'axios';
import './CommentsSection.css';
import { Paper, Box, Typography, TextField, CircularProgress, Button, Snackbar } from '@mui/material';

const CommentsSection = ({ projectId }) => {

  

  const [commentText, setCommentText] = useState('');
  const [emailId, setEmailId] = useState('');
  const [userName, setUserName] = useState('');
  const [userMobileNumber, setUserMobileNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [snackText, setSnackText] = useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic client-side validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailId)) {
     // show('Please enter a valid email address', 'error');
      setLoading(false);
      return;
    }

    const newComment = {
      projectId,
      commentText,
      emailId,
      userName,
      userMobileNumber,
    };

    try {
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

      setUserName('');
      setEmailId('');
      setUserMobileNumber('');
      setCommentText('');
      setSnackText('We will get back to you shortly.')
      setOpen(true);

    } catch (error) {
      console.error('Error submitting comment:', error); // Log error for debugging
      setSnackText('Failed to send enquiry. Please try again.')
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper style={{ backgroundColor: 'transparent', padding: '20px' }} elevation={2}>
      <Typography color='blue' variant="h4" align="left" gutterBottom>
        Enquiry
      </Typography>
      <div>
      <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          message={snackText}
        />
      </div>
      <Box sx={{ overflowX: 'scroll' }}>
        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <TextField
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name..."
            required
            fullWidth
            variant="outlined"
            margin="normal"
            label="Your Name"
          />
          <br />
          <TextField
            className="input"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            placeholder="Enter your email id..."
            type="email"
            required
            fullWidth
            variant="outlined"
            margin="normal"
            label="Email ID"
          />
          <br />
          <TextField
            value={userMobileNumber}
            onChange={(e) => setUserMobileNumber(e.target.value)}
            placeholder="Enter your mobile number..."
            required
            fullWidth
            variant="outlined"
            margin="normal"
            label="Mobile Number"
            inputProps={{ maxLength: 15 }}
          />
          <br />
          <TextField
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Enter details..."
            required
            fullWidth
            variant="outlined"
            margin="normal"
            label="Details"
            multiline
            rows={2}
          />
          <Button type="submit" variant="contained" color="primary" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Submit'}
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default CommentsSection;
