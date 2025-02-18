import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import top100Films from './Api';

const MediaCard = ({ name, eve }) => {
  return (
    <div>
      {top100Films.map((item) => (
        <Card sx={{ maxWidth: 345, margin: 2 }} key={item.year}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://via.placeholder.com/345x140" // Replace with a dynamic image if needed
            title={item.label}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.label}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small" onClick={eve}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

MediaCard.propTypes = {
  hello: PropTypes.string.isRequired,
  eve: PropTypes.any,
};

export default MediaCard;