import React, { useState } from 'react';
import FileDownloadDoneRoundedIcon from '@mui/icons-material/FileDownloadDoneRounded';
import DownloadIcon from '@mui/icons-material/Download';
import { Paper, Box, Typography } from '@mui/material';

function DownloadResumeIcon({resumeBase64File}) {
    const [isDownloaded, setIsDownloaded] = useState(false);

    // Example Base64 string (use your actual Base64 data)
    const base64PDF = `data:application/pdf;base64,${resumeBase64File}`;

    const handleDownload = () => {
        // Convert Base64 string to Blob
        const byteCharacters = atob(base64PDF.split(',')[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'sample.pdf'; // Specify the file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href); // Clean up

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
