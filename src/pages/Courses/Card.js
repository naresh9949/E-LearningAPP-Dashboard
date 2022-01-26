import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {Post} from './../../utils/axiosHandler';


export default function CourseCard(props) {
  const [checked, setChecked] = React.useState(props.popular);
  const handlePopular = async(event)=>{
    const res = await Post('/dashboard/api/courses/makepupular',{courseId:props.id});
    if(res && res.status===200)
      setChecked(!checked);
  }

  const deleteCourse = async()=>{
    const res = await Post('/dashboard/api/courses/deletecourse',{courseId:props.id});
    if(res && res.status===200)
      window.location = '/dashboard/course/allcourses';
  }
  return (
    <Card align="center">
         <CardMedia
        component="img"
        height="180"
        image={props.image}
        alt={props.name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.channel}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.id}
        </Typography>
        <FormControlLabel
          control={<Switch color="primary" checked={checked} onChange={handlePopular} />}
          label="Make Popular"
          labelPlacement="start"
        />
        <Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
      </CardContent>
    </Card>
  );
}
