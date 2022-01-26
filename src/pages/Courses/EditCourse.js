import * as React from 'react';
import {useEffect,useState} from 'react';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Card from './Card';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import CourseFields from './CourseFields';
import Spinner from './../../SharedComponents/Spinner';
import {Get} from './../../utils/axiosHandler';
import { useParams } from "react-router-dom";


export default function AddUser() {
  const { courseName } = useParams();
  const [loading,setLoading] = React.useState(true);
  const [course,setCourse] = React.useState(null);

  useEffect(async()=>{
      const res = await Get('/api/courses/GetCourseByName/'+courseName);
      if(res && res.status===200)
      setCourse(res.data);
        console.log(res.data)
      setLoading(false);
  },[])

  if(loading)
    return <Spinner/>
    
  return (
    <Container>
      <h2>Edit Course</h2>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card name={course.name} image={course.image} popular={course.popular} channel={course.channelName} id={course._id} />
      </Grid>
      <Grid item xs={12} sm={8}>
       <CourseFields course={course}/>
      </Grid>
    </Grid>
    </Container>
  );
}
