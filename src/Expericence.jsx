import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import  { timelineItemClasses } from '@mui/lab/TimelineItem';
import {
    Typography,
    Paper
  } from '@mui/material';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

function Experience({sortedExperiences}){
   return ( 
    <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography color='blue' variant="h4" align="left" gutterBottom>
            Work Experience
        </Typography>
        <Timeline  sx={{
        [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
        },
    }}>
        {sortedExperiences.map((experience, index) => (
        <TimelineItem key={index}>
            <TimelineSeparator>
            <TimelineDot  color="success"><WorkHistoryIcon /></TimelineDot>
            
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