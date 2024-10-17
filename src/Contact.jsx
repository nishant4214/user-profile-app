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

function Contact({Contact}) {
    const [visitorCount, setVisitorCount] = useState(0);

    const fetchVisitorCount = async () => {
        try {
            const response = await fetch('https://profile-api-nishant.netlify.app/.netlify/functions/getVisitorCount');
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            setVisitorCount(data.count);
        } catch (error) {
            console.error('Failed to fetch visitor count:', error);
        }
    };

    const incrementVisitorCount = async () => {
        try {
            const response = await fetch('https://profile-api-nishant.netlify.app/.netlify/functions/incrementVisitorCount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}),
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            fetchVisitorCount(); // Refresh the count
        } catch (error) {
            console.error('Failed to increment visitor count:', error);
        }
    };

    useEffect(() => {
        fetchVisitorCount(); // Get the current count when the component mounts

        const hasIncremented = sessionStorage.getItem('hasIncremented');

        if (!hasIncremented) {
            incrementVisitorCount(); 
            sessionStorage.setItem('hasIncremented', 'true');
        }
    }, [])

    return (
        <Paper 
            style={{
            backgroundColor: 'transparent',
            padding: '20px'
            }}
            elevation={2}>
            <Typography color='blue' variant="h4" align="left" gutterBottom>
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
                        <InstagramIcon fontSize='large' />
                    </a>
                </Grid2>
                <Grid2 item xs={4} md={4}>
                    <a href={`mailto:${Contact.email}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <EmailIcon fontSize='large' style={{ marginRight: 8, cursor: 'pointer' }} />
                    </a>
                </Grid2>
                <Grid2 item xs={4} md={4}>
                    <a href={Contact.linkedIn} target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon fontSize='large' />
                    </a>
                </Grid2>
                <Grid2 item xs={4} md={4}>
                    <a href={Contact.githubId} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon fontSize='large' />
                    </a>
                </Grid2>
                <Grid2 item xs={4} md={4}>
                    <a href={Contact.whatsApp} target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon fontSize='large' />
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