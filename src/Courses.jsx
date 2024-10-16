import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Paper, Box, Typography } from '@mui/material';
import fundamentalsPng from './images/fundamentals.png';
import databasesPng from './images/databases.png'
const itemData = [
 
];

export default function Courses({Courses}) {
  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <Typography color='blue' variant="h4" align="left" gutterBottom>
        Courses
      </Typography>
      <Box sx={{ overflowX: 'scroll' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {Courses.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                img={`${item.img}?w=248&fit=crop&auto=format`}
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
