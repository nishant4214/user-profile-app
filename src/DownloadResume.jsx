import React, { useState } from 'react';
import FileDownloadDoneRoundedIcon from '@mui/icons-material/FileDownloadDoneRounded';
import DownloadIcon from '@mui/icons-material/Download';
import {
    Paper,
    Box,Typography
  } from '@mui/material';

function DownloadResumeIcon() {
    const [isDownloaded, setIsDownloaded] = useState(false);
    const resumeUrl = '/sample.pdf'; // Ensure the leading slash for the public folder

    const handleDownload = (e) => {
        // Prevent default anchor behavior
        e.preventDefault();

        // Start the download
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'sample.pdf'; // Optional: specify the file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Indicate that the download has started
        setIsDownloaded(true);

        // Reset the download state after a few seconds
        setTimeout(() => {
            setIsDownloaded(false);
        }, 3000); // Reset after 3 seconds
    };

    return (<>
        <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography color='blue' variant="h4" align="left" gutterBottom>
                Resume
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center">                 
                <a 
                    href={resumeUrl} 
                    onClick={handleDownload} 
                    style={{ cursor: 'pointer', textDecoration: 'none' }}
                    aria-label="Download Resume"
                >
                    {isDownloaded ? <FileDownloadDoneRoundedIcon sx={{ fontSize: 40 }}/> : <DownloadIcon sx={{ fontSize: 40 }}/>}
                </a>
            </Box>
        </Paper></>
    );
}

export default DownloadResumeIcon;
