import React, { useState,useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import  { timelineItemClasses } from '@mui/lab/TimelineItem';
import {
    Typography,
    Paper,
    Grid2
  } from '@mui/material';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function Experience({sortedExperiences}){
    const [totalExperience, setTotalExperience] = useState(0);

    const parseDate = (dateString) => {
        const [day, month, year] = dateString.split(' ');
        const monthIndex = new Date(Date.parse(month + " 1, 2021")).getMonth(); // Get month index
        return new Date(year, monthIndex, day); // Create a new Date object
    };
    const fetchTotalExperience = () => {
        const startDate = parseDate(sortedExperiences[sortedExperiences.length-1].startDate);
        const endDate = new Date();
        const experienceDuration = endDate - startDate; // Duration in milliseconds
        const total = (experienceDuration / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
      
        setTotalExperience(total);
    };

    useEffect(() => {
        fetchTotalExperience();
    }, [sortedExperiences]);


    return ( 
        <Paper 
            style={{
            backgroundColor: 'transparent',
            padding: '20px'
            }}
            elevation={2}>
            <Grid2 container spacing={2}>
                <Grid2>
                    <Typography color='blue' variant="h4" align="left" gutterBottom>
                        Work Experience
                    </Typography>
                </Grid2>
                <Grid2 size={8}>
                    <Typography variant="h5" align="right" gutterBottom>
                        Total Expericence : {totalExperience} Years
                    </Typography>
                </Grid2>
            </Grid2>
            <Timeline  sx={{
            [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
            },
        }}> 
        {sortedExperiences.map((experience, index) => (
        <TimelineItem key={index}>
            <TimelineSeparator>
            <TimelineDot color='success'>
                {/* <WorkHistoryIcon /> */}
                <img
                    srcSet={`${experience.logo} 8x`} // Using Base64 image for high resolution
                    src={experience.logo} // Using Base64 image
                    loading="lazy"
                    style={{ borderRadius: '50%', width: '50px', height: '50px', objectFit: 'cover' }} // Adjust width and height as needed
                    />
                </TimelineDot>
            
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h7 style={{fontWeight:'bold'}}>{experience.designation} @ {experience.company} </h7><br/> {experience.startDate} - {experience.endDate} <br/> Location : {experience.location} <br/>  ({experience.employmentType})</TimelineContent>
                </TimelineItem>
        ))}
        </Timeline>
    </Paper>
    );
}

export default Experience;