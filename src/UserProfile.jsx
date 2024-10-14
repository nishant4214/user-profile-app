// src/UserProfile.js

import React, { useState } from 'react';

import './UserProfile.css';
import profilePic from './images/Tenant_669_org_752_user_21030540_IMG_20240924_103849.jpg'
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid2,
  Avatar,
  Box,
  IconButton,
} from '@mui/material';
const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Nishant Pande',
    email: 'nishant.pande@esds.co.in',
    phone: '708 385 1078',
    address: '7, Lok Kalyan Marg (7LKM), formerly 7, Race Course Road, Lok Kalyan Marg, New Delhi',
    bio: 'Nishant is a passionate React developer with over 3 years of experience in building dynamic and responsive web applications. With a strong foundation in JavaScript and a keen eye for user experience, he specializes in creating seamless interfaces and engaging user interactions.'
    +'Having worked on various projects ranging from small startups to large-scale enterprise applications, Nishant is adept at collaborating with cross-functional teams to deliver high-quality solutions. He is proficient in modern front-end technologies, including React, Redux, and Tailwind CSS, and is always eager to learn about the latest trends and best practices in the web development ecosystem.'
    +'In addition to his technical skills, Nishant values clean code and performance optimization, ensuring that applications are not only functional but also efficient and maintainable. He enjoys tackling challenges and solving complex problems, making him a reliable asset in any development team.'
    +'Outside of coding, Nishant is an avid contributor to the developer community, participating in meetups and open-source projects. He also loves sharing knowledge through blogs and tutorials, helping others navigate the world of React development.',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            sx={{ width: 200, height: 200, mb: 2 }}
            src={profilePic}
            alt={userData.name}
          />
          <Typography variant="h4" align="center" gutterBottom>
            {userData.name}
          </Typography>
        </Box>
        <Grid2 size={{ xs:12, md: 8 }} spacing={2}>
          <Grid2 item xs={12}  spacing={2}>
            <TextField
              label="Email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              fullWidth
              disabled={!isEditing}
            />
          </Grid2>
          <Grid2 item xs={12}  spacing={2}>
            <TextField
              label="Phone"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              fullWidth
              disabled={!isEditing}
            />
          </Grid2>
          <Grid2 item xs={12}  spacing={2}>
            <TextField
              label="Address"
              name="address"
              value={userData.address}
              onChange={handleChange}
              fullWidth
              disabled={!isEditing}
            />
          </Grid2>
          <Grid2 item xs={12}  spacing={2}>
            <TextField
              label="Bio"
              name="bio"
              value={userData.bio}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              disabled={!isEditing}
            />
          </Grid2>
          <Grid2 item xs={12}  spacing={2}>
            <Box display="flex" justifyContent="center" spacing={2}>
              <IconButton
                variant="contained"
                color="primary"
                onClick={handleEditToggle}
                disabled={isEditing}
              >
              </IconButton>
              {isEditing && (
                <>
                  <IconButton
                    variant="contained"
                    color="primary"
                    onClick={handleEditToggle}
                  >
                  </IconButton>
                  <IconButton
                    variant="outlined"
                    color="secondary"
                    onClick={handleEditToggle}
                  >
                  </IconButton>
                </>
              )}
            </Box>
          </Grid2>
        </Grid2>
      </Paper>
    </Container>
  );
};

export default UserProfile;
