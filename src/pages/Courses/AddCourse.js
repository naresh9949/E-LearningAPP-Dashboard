import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import EditFields from './CourseFields';
import { styled } from '@mui/material/styles';
import EditPlaylist from './EditPlaylist';
import {Get,Post} from './../../utils/axiosHandler';
import Notification from './../../SharedComponents/Noification';
import Spinner from './../../SharedComponents/Spinner';




export default function AddCourse() {
  const [course,setCourse] = useState(null);
  const [notification,setNotification] = useState({
    open : false,
    message : null,
    success : true
  })

  const saveCourse = async(options)=>{
    var video_content = [];
    const videos = course.videos?course.videos:[];

    for(let i=0;i<options.length;i++)
    {
      const splitter = options[i].split('-');
      let start = parseInt(splitter[0])
      let end = parseInt(splitter[1]);
      let title = splitter[2];
      const obj = {
        section_title : title,
        videos : videos.slice(start, end+1)
      }
      video_content.push(obj);
    }

    course.video_content = video_content;
    const res = await Post('/dashboard/api/course/addcourse',course);
    if(res && res.status===201)
      window.location = '/dashboard/course/addnewcourse';
    
    if(res && res.status)
      setNotification({open:true,success:false,message:res.data.message})
  }

  const getCourse = async(name,playListId,image,branch,category,channelName,description,cos)=>{
    console.log(name,playListId,image,branch,category,channelName,description,cos);
    const obj = {
      name : name,
      playListId : playListId,
      image : image,
      branch : branch,
      category : category,
      channelName : channelName,
      description : description,
      cos : cos
    }
    const res = await Post('/dashboard/api/course/createcourse',obj);
    console.log(res)
    if(res && res.status===200)
      setCourse(res.data)
    if(res && res.status)
      setNotification({open:true,success:false,message:res.data.message})
  }



  if(course!==null)
  return <EditPlaylist handler={saveCourse}/>;

  return (
    <Container>
       <Notification open={notification.open} success={notification.success} handler={setNotification} message={notification.message}/>
      <h2>Create a new Course</h2>
      <br/>
     <EditFields handler={getCourse}/>
    </Container>
  );
}
