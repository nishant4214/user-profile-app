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
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
function Education({sortedEducations}){
   return ( 
    <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" align="left" gutterBottom>
            Education
        </Typography>
        <Timeline  sx={{
        [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
        },
    }}>
        {sortedEducations.map((education, index) => (
        <TimelineItem key={index}>
            <TimelineSeparator>
            <TimelineDot  color="success"><HistoryEduIcon /></TimelineDot>
            
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><h7 style={{fontWeight:'bold'}}>{education.course} @ {education.institute} </h7><br/> {education.startDate} - {education.endDate} <br/> University : {education.university} <br/>  ({education.educationType})</TimelineContent>
                </TimelineItem>
        ))}
        </Timeline>
    </Paper>
    );
}

export default Education;