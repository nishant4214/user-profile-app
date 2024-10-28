import  React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Paper, Box, Typography, Dialog, DialogContent, IconButton  } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Courses({ Courses }) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper 
      style={{
        backgroundColor: 'transparent',
        padding: '20px',
        
      }}
      elevation={2}
    >
      <Typography color='blue' variant="h4" align="left" gutterBottom>
        Courses
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <ImageList variant='masonry' cols={3} gap={8}>
          {Courses.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img} 2x`} // Using Base64 image for high resolution
                src={item.img} // Using Base64 image
                alt={item.title}
                loading="lazy"
                onClick={() => handleImageClick(item.img)} // Open popup on image click
                style={{ cursor: 'pointer' }} // Change cursor to pointer
                title='Click to view full'
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            style={{ position: 'absolute', right: '16px', top: '16px' }}
          >
            <CloseIcon />
          </IconButton>
          <img src={selectedImage} alt="Full View" style={{ width: '100%', height: 'auto' }} />
        </DialogContent>
      </Dialog>
    </Paper>
  );
}
