import React, { useState,useEffect } from 'react';

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
import Education from './Education'
import Contact from './Contact';
import DownloadResumeIcon from './DownloadResume';
import Projects from './Projects';
import Courses from './Courses';
import fundamentalsPng from './images/fundamentals.png';
import databasesPng from './images/databases.png';
const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Nishant Pande',
    title : 'Frontend Developer',
    email: 'nishant.pande@esds.co.in',
    company : 'ESDS Software Solutions PVT. LTD',
    phone: '+91 708 385 1078',
    whatsApp : "https://wa.me/7083851078",
    linkedIn : "https://www.linkedin.com/in/nishant-pande-50220068/",
    instagram : "https://www.instagram.com/nish_4214/profilecard/?igsh=aWM5MGcxd3g4bXNl",
    githubId : "https://github.com/nishant4214",
    address: 'Pathardi Phata, Nashik 422010',
    bio: 'Dynamic and results-oriented .NET Developer with 2.9 years of experience in designing, developing, and deploying high-performance applications on the .NET framework. Proficient in C#, ASP.NET (MVC and Core), SQL Server, and JavaScript/jQuery, with a strong understanding of object-oriented programming principles. Skilled in developing scalable solutions leveraging .NET technologies and cloud platforms such as Azure. Adept at collaborating with cross-functional teams to analyze requirements, troubleshoot issues, and deliver innovative software solutions that meet business objectives.',
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
    education : [
      {
        institute : "Muktanand Madhyamik Vidyalaya, New Cidco, Nashik",
        university : "Maharashtra State Board SSC",
        startDate : "Jun 2011",
        endDate : "Jun 2012",
        course : "SSC",
        grade : "76.20%",
        educationType : "Full time"	
      },
      {
        institute : "Govt. Polytechnic Vikramgad, Palghar",
        university : "MSBTE",
        startDate : "Jul 2012",
        endDate : "Jun 2017",
        course : "Diploma in Computer Engineering",
        grade : "64.75",
        educationType : "Full time"	
      },
      {
        institute : "Pune Vidyarthi Griha's College of Engineering & S. S. Dhamankar Institute of Management, Nashik",
        university : "Savitribai Phule Pune University",
        startDate : "Aug 2017",
        endDate : "Jun 2021",
        course : "B.E. Computer",
        grade : "7.08 CGPA",
        educationType : "Full time"	
      }
    ],
    projects : [
      {
        name : "WLA (White Label ATM)",
        technologiesUsed : "Dot Net Core, MVC, HTML, CSS, JQuery, AJAX, C#, Rest API, NGINX, IIS, SQL, PostgreSQL",
        roleAndResponsibility : "Developed Web Portal using .NET Core MVC."
          +" Developed REST API, Background Services using .Net Core."
          +" Integrated third party API’s from E-sign, KYC verification, Bank account verification and SMS services etc."
          +" Responsible for analyzing and optimizing stored procedures."
          +" Conducted requirement gathering and analysis, ensuring solutions met business objectives and synchronized delivery dates."
          +" Designed and developed APIs for WLA mobile applications (Android & IOS), contributing to project success and client satisfaction."
          +" Deployment on IIS server and configured NGINX for load balancing."
          +" Responsible for patching activity and continuous analysis on background services."
      },
      {
        name : "DUX PRQ",
        technologiesUsed : "Dot Net Core, MVC, HTML, CSS, JQuery, AJAX, C#, Rest API, NGINX, IIS, PostgreSQL",
        roleAndResponsibility : "Developed Web Portal using .NET Core MVC."
          +" Developed REST API, Background Services using .Net Core."
          +" Worker Service for bulk QR Code PDF generation for stick on soundboxes." 
          +" Individually handled, deployed the project on production." 
          +" Responsible for patching activity and continuous analysis on background services."
      },
      {
        name : "SMART EMI",
        technologiesUsed : "Dot Net Core, MVC, HTML, CSS, JQuery, AJAX, C#, Rest API, NGINX, IIS, PostgreSQL",
        roleAndResponsibility : "Web Application and API development"
      },
      {
        name : "FA TRACKER (FIELD ASSET TRACKER)",
        technologiesUsed : "Dot Net, MVC, HTML, CSS, JQuery, AJAX, C#, IIS, SQL",
        roleAndResponsibility : "Production Support for ASP.NET application."
          +" Database migration to different server."
          +" New change requests has been fulfilled within delivery dates"
          +" Critical issues has been resolved"
      }
    ],
    courses : [ 
      {
        img: fundamentalsPng, // Corrected the path for images in the public folder
        title: 'Programming Foundations Databases',
        author: 'LinkedIn',
      },
      {
        img: databasesPng,
        title: 'Programming Foundations: Fundamentals',
        author: 'LinkedIn',
      }
    ],
    frontendSkills : "ReactJS, Html, CSS, JQuery, Bootstrap 5, AJAX",
    backendSkills : "Rest API, DOT NET Core, C#, Microservices, SQL, PostgreSql",
    otherSkills : "NGINX, IIS, GIT, Azure"
  });
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
            <Typography color='blue' variant="h4" align="left" gutterBottom>
              About Me
            </Typography>
            <Typography variant="h7" align="center" gutterBottom>
              {userData.bio}
            </Typography>
            <br/><br/>
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
      <DownloadResumeIcon/>
      <br/>
      <Education sortedEducations={sortedEducations}/>
      <br/>
      <Contact Contact={userData}/>

    </Container>
  );
};

export default UserProfile;
