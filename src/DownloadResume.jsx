import React, { useState } from 'react';
import FileDownloadDoneRoundedIcon from '@mui/icons-material/FileDownloadDoneRounded';
import DownloadIcon from '@mui/icons-material/Download'; // Import another icon for the "download" state

function DownloadResumeIcon() {
    const [isDownloaded, setIsDownloaded] = useState(false);
    const resumeUrl = 'src/sample.pdf'; // Update with your actual file path

    const handleDownload = () => {
        setIsDownloaded(true);
        // Optional: Set a timeout to reset the icon after a few seconds
        setTimeout(() => {
            setIsDownloaded(false);
        }, 3000); // Reset after 3 seconds
    };

    return (
        <a 
            href={resumeUrl} 
            download 
            onClick={handleDownload} 
            style={{ cursor: 'pointer', textDecoration: 'none' }}
        >
            {isDownloaded ? <FileDownloadDoneRoundedIcon /> : <DownloadIcon />}
        </a>
    );
}

export default DownloadResumeIcon;
