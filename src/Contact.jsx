import React, { useState, useEffect } from 'react';
import {
    Typography,
    Paper,
    Grid2,
    Link
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact({ Contact }) {
    const [visitorCount, setVisitorCount] = useState(0);

    const fetchVisitorCount = async () => {
        const response = await fetch('http://localhost:5000/api/visitor-count');
        const data = await response.json();
        setVisitorCount(data.count);
    };

    const incrementVisitorCount = async () => {
        await fetch('http://localhost:5000/api/visitor-count', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        });
        fetchVisitorCount(); // Refresh the count
    };


    useEffect(() => {
        fetchVisitorCount(); // Get the current count when the component mounts
        const hasIncremented = localStorage.getItem('hasIncremented');

        if (!hasIncremented) {
            incrementVisitorCount(); // Increment count only if not done already
            localStorage.setItem('hasIncremented', 'true'); // Mark that the increment has occurred
        }
    }, []); // Dependency array with hasIncremented


    return (
        <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h4" align="left" gutterBottom>
                Contact
            </Typography>
            <Typography variant="h7" align="center" gutterBottom>
                Mobile No: {Contact.phone}
            </Typography>
            <br />
            <Typography variant="h7" align="center" gutterBottom>
                Address: {Contact.address}
            </Typography>
            <br /><br />
            <Grid2 container spacing={2}>
                <Grid2 item xs={4} md={4}>
                    <a href={Contact.instagram} target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                    </a>
                </Grid2>
                <Grid2 item xs={4} md={4}>
                    <a href={`mailto:${Contact.email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <EmailIcon style={{ marginRight: 8, cursor: 'pointer' }} />
                    </a>
                </Grid2>
                <Grid2 item xs={4} md={4}>
                    <a href={Contact.linkedIn} target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                </Grid2>
                <Grid2 item xs={4} md={4}>
                    <a href={Contact.githubId} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                    </a>
                </Grid2>
                <Grid2 item xs={4} md={4}>
                    <a href={Contact.whatsApp} target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon />
                    </a>
                </Grid2>
                <Grid2 item xs={4} md={4}>
                    <h7>Visitor Count: {visitorCount}</h7>
                </Grid2>
            </Grid2>
        </Paper>
    );
}

export default Contact;
