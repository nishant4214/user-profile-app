import React, { useState,useEffect } from 'react';

import './UserProfile.css';
import profilePic from './images/Nishant Pande.jpg'
import profileJson from './profile.json'
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid2,
  Avatar,
  Box,
  IconButton
} from '@mui/material';

import Experience from './Expericence';
import Education from './Education'
import Contact from './Contact';
import DownloadResumeIcon from './DownloadResume';
import Projects from './Projects';
import Courses from './Courses';
const UserProfile = () => {
  const [userData, setUserData] = useState(profileJson);
  const sortedExperiences = userData.experience.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
  const sortedEducations = userData.education.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

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
        <Box display="flex" flexDirection="column" alignItems="left">
          <Avatar
            sx={{ width: 200, height: 200, mb: 2 }}
            src={profilePic}
            alt={userData.name}
          />
          
          <Typography variant="h4" align="left" gutterBottom>
            {userData.name}
          </Typography>
          <Typography variant="h7" align="left" gutterBottom>
            {userData.title} @{userData.company}
          </Typography>
          <br/>
        </Box>  
        <Grid2 container spacing={2}>
          <Grid2  size={6}  spacing={2}>
            <Typography color='blue' variant="h4" align="left" gutterBottom>
              About Me
            </Typography>
            <Typography variant="h7" align="center" gutterBottom>
              {userData.bio}
            </Typography>
            <br/><br/>
          </Grid2>
          <Grid2 size={6}  spacing={2}>
            <Typography color='blue' variant="h4" align="left" gutterBottom>
              Skills
            </Typography>
            <Typography variant="h7" align="center" gutterBottom>
              Frontend : {userData.frontendSkills}
            </Typography>  
            <br/>
            <Typography variant="h7" align="center" gutterBottom>
              Backend : {userData.backendSkills}
            </Typography> 
            <br/>
            <Typography variant="h7" align="center" gutterBottom>
              Other : {userData.otherSkills}
            </Typography>   
            <br/>        
          </Grid2>
          <Grid2  size={12}  spacing={2}>
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
      <br/>
      <Experience sortedExperiences={sortedExperiences}/>
      <br/>
      <Projects projects={userData.projects}/>
      <br/>
      <Courses Courses={userData.courses}/>
      <br/>
      <DownloadResumeIcon resumeBase64File={userData.resumeBase64File}/>
      <br/>
      <Education sortedEducations={sortedEducations}/>
      <br/>
      <Contact Contact={userData}/>

    </Container>
  );
};

export default UserProfile;
