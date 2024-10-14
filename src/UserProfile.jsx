// src/UserProfile.js

import React, { useState } from 'react';

import './UserProfile.css';
import profilePic from './images/Nishant Pande.jpg'
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
import Contact from './Contact';
const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Nishant Pande',
    title : 'Frontend Developer',
    email: 'nishant.pande@esds.co.in',
    company : 'ESDS Software Solutions',
    phone: '+91 708 385 1078',
    linkedIn : "https://www.linkedin.com/in/nishant-pande-50220068/",
    instagram : "https://www.instagram.com/nish_4214/profilecard/?igsh=aWM5MGcxd3g4bXNl",
    address: '7, Lok Kalyan Marg (7LKM), formerly 7, Race Course Road, Lok Kalyan Marg, New Delhi',
    bio: 'Nishant is a passionate React developer with over 3 years of experience in building dynamic and responsive web applications. With a strong foundation in JavaScript and a keen eye for user experience, he specializes in creating seamless interfaces and engaging user interactions.'
    +'Having worked on various projects ranging from small startups to large-scale enterprise applications, Nishant is adept at collaborating with cross-functional teams to deliver high-quality solutions. He is proficient in modern front-end technologies, including React, Redux, and Tailwind CSS, and is always eager to learn about the latest trends and best practices in the web development ecosystem.'
    +'In addition to his technical skills, Nishant values clean code and performance optimization, ensuring that applications are not only functional but also efficient and maintainable. He enjoys tackling challenges and solving complex problems, making him a reliable asset in any development team.'
    +'Outside of coding, Nishant is an avid contributor to the developer community, participating in meetups and open-source projects. He also loves sharing knowledge through blogs and tutorials, helping others navigate the world of React development.',
    experience : [
      {
        company : "SAMVIT INFOTECH PVT. LTD",
        employeeCode : "NA",
        startDate : "28 Jun 2021",
        endDate : "05 Nov 2021",
        designation : "Trainee",
        location : "Nashik",
        employmentType : "Trainee"	
      },
      {
        company : "VIZPAY BUSINESS SOLUTIONS PVT. LTD",
        employeeCode : "VP0023",
        startDate : "08 Nov 2021",
        endDate : "20 Sep 2024",
        designation : "Junior Executive",
        location : "Thane",
        employmentType : "Regular"	
      },
      {
        company : "ESDS SOFTWARE SOLUTIONS PVT. LTD",
        employeeCode : "3568",
        startDate : "20 Sep 2024",
        endDate : "currenty working",
        designation : "Dot Net Developer",
        location : "Nashik",
        employmentType : "Regular"	
      },
    ],
    frontendSkills : "ReactJS, Html, CSS, Jquery, Bootstrap 5, AJAX",
    backendSkills : "Rest API, DOT NET Core, Microservices, SQL, PostgreSql",
    otherSkills : "NGINX, IIS, GIT, Azure"
  });
  const sortedExperiences = userData.experience.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

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
          <Typography variant="h7" align="center" gutterBottom>
            {userData.title} @{userData.company}
          </Typography>
          <br/>
        </Box>  
        <Grid2 container spacing={2}>
          <Grid2  size={12}  spacing={2}>
            <Typography variant="h4" align="left" gutterBottom>
              About Me
            </Typography>
            <Typography variant="h7" align="center" gutterBottom>
              {userData.bio}
            </Typography>
            <br/><br/>
            <Typography variant="h4" align="left" gutterBottom>
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
      <Contact Contact={userData}/>
    </Container>
  );
};

export default UserProfile;
