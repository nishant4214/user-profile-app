import React from 'react';
import {
    Typography,
    Paper,
    Grid2,
    Link
  } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
function Contact({Contact}){
    return (<Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" align="left" gutterBottom>
            Contact
            </Typography>
            <Typography variant="h7" align="center" gutterBottom>
            Mobile No : {Contact.phone}
            </Typography>
            <br/>
            <Typography variant="h7" align="center" gutterBottom>
            Address : {Contact.address}
        </Typography>  
        <br/><br/>
        <Grid2 container spacing={2}>
            <Grid2 item xs={4} md={4}>
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                    <InstagramIcon />
                </a>            
            </Grid2>
            <Grid2 item xs={4} md={4}>
                <a href={`mailto:${Contact.email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <EmailIcon style={{ marginRight: 8, cursor: 'pointer' }} />
                </a>
            </Grid2>
            <Grid2 item xs={4} md={4}>
                <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon/>
                </a>      
            </Grid2>
        </Grid2>
    </Paper>  
    )

}

export default Contact;