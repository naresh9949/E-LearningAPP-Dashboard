import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import Link from '@mui/material/Link';

function CourseCard(props) {
  return (
    <Card align="center">
      <CardMedia component="img" height="150" image={props.image} alt={props.name} />
      <CardContent>
        <Link href={"/dashboard/course/editcourse/"+props.name} underline="none">
          {props.name}
        </Link>
        <Typography color="text.secondary">Enrolls : {props.noenrolls}</Typography>
      </CardContent>
    </Card>
  );
}

export default CourseCard;
