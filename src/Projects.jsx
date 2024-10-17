import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import {
    Typography,
    Paper,
    Box
  } from '@mui/material';
  

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Projects({projects}) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
        <Paper 
            style={{
            backgroundColor: 'transparent',
            padding: '20px'
            }}
            elevation={2}>
        <Typography color='blue' variant="h4" align="left" gutterBottom>
            Projects
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center">
        {projects.map((project, index) => (
          <Accordion 
              expanded={expanded === 'panel' + (index + 1)} 
              onChange={handleChange('panel' + (index + 1))} 
              style={{ width: '100%', backgroundColor:'transparent' }} 
              key={index}
            >
            <AccordionSummary 
              aria-controls={`panel${index + 1}d-content`} 
              id={`panel${index + 1}d-header`}
            >
              <Typography>
                <p style={{ fontWeight: 'bold' }}>{project.name}</p>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p style={{ fontWeight: 'bold' }}>Technologies Used:</p> {project.technologiesUsed}
              </Typography>
              <Typography>
                <p style={{ fontWeight: 'bold' }}>Role & Responsibilities:</p> {project.roleAndResponsibility}
              </Typography>
            </AccordionDetails>
          </Accordion>

        ))}
        </Box>
      </Paper>
    </>
  );
}
