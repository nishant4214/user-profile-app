import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Paper, Box, Typography } from '@mui/material';


export default function Courses({Courses}) {
  return (
    <Paper 
       style={{
            backgroundColor: 'transparent',
            padding: '20px'
            }}
            elevation={2}>
      <Typography color='blue' variant="h4" align="left" gutterBottom>
        Courses
      </Typography>
      <Box sx={{ overflowX: 'scroll' }}>
        <ImageList variant="masonry" cols={2} gap={8}>
          {Courses.map((item) => (
            <ImageListItem key={item.img}>
            <img
                srcSet={`${item.img} 2x`} // Using Base64 image for high resolution
                src={item.img} // Using Base64 image
                alt={item.title}
                loading="lazy"
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
    </Paper>
  );
}
