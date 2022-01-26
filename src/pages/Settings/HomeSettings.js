import React from 'react';
import {useState} from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function HomeSettings() {
    const [bannerPage,setBannerPage] = useState('');
    const [courseImage,setCourseImage] = useState('');
    const [quickLearnImage,setQuickLearnImage] = useState('');
    const [youtubeImage,setYoutubeImage] = useState('');
    const [quizImage,setQuizImage] = useState('');
    const [videoLink,setVideoLink] = useState('');
    const [latestTechImage,setLatestTechImage] = useState('');
    const [facebookLink,setFacebookLink] = useState('');
    const [instagramLink,setInstagramLink] = useState('');
    const [twitterLink,setTwitterLink] = useState('');
    const [whatsappLink,setWhatsappLink] = useState('');
  return (
    <Container>
      <h2>Home Settings</h2>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField id="outlined-basic" value={bannerPage} onChange={(event)=>{setBannerPage(event.target.value)}} fullWidth label="Banner Image" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="outlined-basic" value={courseImage} onChange={(event)=>{setCourseImage(event.target.value)}} fullWidth label="Course Image" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="outlined-basic" value={quickLearnImage} onChange={(event)=>{setQuickLearnImage(event.target.value)}} fullWidth label="Quick Learn Image" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="outlined-basic" value={youtubeImage} onChange={(event)=>{setYoutubeImage(event.target.value)}} fullWidth label="Youtube Image" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="outlined-basic" value={quizImage} onChange={(event)=>{setQuizImage(event.target.value)}} fullWidth label="Quiz Image" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="outlined-basic" value={videoLink} onChange={(event)=>{setVideoLink(event.target.value)}} fullWidth label="Video Link" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="outlined-basic" value={latestTechImage} onChange={(event)=>{setLatestTechImage(event.target.value)}} fullWidth label="Latest Tech Image" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="outlined-basic" value={facebookLink} onChange={(event)=>{setFacebookLink(event.target.value)}} fullWidth label="Facebook Link" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="outlined-basic" value={instagramLink} onChange={(event)=>{setInstagramLink(event.target.value)}} fullWidth label="Instagram Link" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="outlined-basic" value={twitterLink} onChange={(event)=>{setTwitterLink(event.target.value)}} fullWidth label="Twitter Link" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="outlined-basic" value={whatsappLink} onChange={(event)=>{setWhatsappLink(event.target.value)}} fullWidth label="Whatsapp Link" variant="outlined" />
        </Grid>
        <Grid item xs={0} sm={6}>
          
        </Grid>
        <Grid item xs={0} sm={10}>
          
        </Grid>
        <Grid item xs={0} sm={2}>
        <Button fullWidth onClick={()=>{}} fullWidth variant="contained" sx={{ float: 'left' }}>
              save changes
            </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomeSettings;
