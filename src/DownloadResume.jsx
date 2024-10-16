import React, { useState } from 'react';
import FileDownloadDoneRoundedIcon from '@mui/icons-material/FileDownloadDoneRounded';
import DownloadIcon from '@mui/icons-material/Download';
import { Paper, Box, Typography } from '@mui/material';

function DownloadResumeIcon() {
    const [isDownloaded, setIsDownloaded] = useState(false);
    const resumeUrl = '/sample.pdf'; // Ensure the leading slash for the public folder

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.setAttribute('download', 'sample.pdf'); // Specify the file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsDownloaded(true);
        setTimeout(() => setIsDownloaded(false), 3000);
    };

    return (
        <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography color='blue' variant="h4" align="left" gutterBottom>
                Resume
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
                <button 
                    onClick={handleDownload} 
                    style={{ cursor: 'pointer', border: 'none', background: 'none' }}
                    aria-label="Download Resume"
                >
                    {isDownloaded ? <FileDownloadDoneRoundedIcon sx={{ fontSize: 40 }} /> : <DownloadIcon sx={{ fontSize: 40 }} />}
                </button>
            </Box>
        </Paper>
    );
}

export default DownloadResumeIcon;
