import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function EditPlaylist(props) {
    const [sections,setSections] = useState([]);
    const [section,setSection] = useState('');
    const haandleSection = ()=>{
        sections.push(section);
        setSections([...sections]);
    }

    const handleRemove = (value)=>{
        var newsections = sections.filter(item => item !== value)
        setSections([...newsections]);
    }

    const handleSubmit = ()=>{
        props.handler(sections);
    }

  return (
    <Container>
      <h4>Add Play List Titles</h4>
      <br/>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <TextField id="outlined-basic" onChange={(event)=>{setSection(event.target.value)}} size="small" fullWidth label="Section Title with Range" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={2}>
        <Button fullWidth onClick={haandleSection} variant="contained">Add</Button>
        </Grid>
        <Grid item xs={12} sm={2}>
        <Button fullWidth onClick={handleSubmit} variant="contained">Submit</Button>
        </Grid>
      </Grid>
      <br/>
      <Stack spacing={2}>
        
       {
           sections.map((item)=>
            <Alert icon={false} severity="success" action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    //console.log(item)
                    handleRemove(item);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }>
            {item}
          </Alert>
            )
       }
       
      </Stack>
     
    </Container>
  );
}

export default EditPlaylist;
