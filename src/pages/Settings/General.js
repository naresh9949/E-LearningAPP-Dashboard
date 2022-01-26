import React from 'react';
import { useState } from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
function General() {

    const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([
    'WEB',
    'MOBILE APPS'
  ]);


  const [branch, setBranch] = useState('');
  const [branches, setBranches] = useState([
    'COMPUTER SCIENCE AND ENGINEERING',
    'COMPUTER SCIENCE AND ENGINEERING'
  ]);

  const [institute, setInstitute] = useState('');
  const [institutions, setInstitutions] = useState([
    'SVEC',
    'NARAYANA'
  ]);

  const saveCategory = ()=>{
        console.log(category)
  }

  const saveBranch = ()=>{
    console.log(branch)
}

const saveInstitute = ()=>{
    console.log(institute)
}

  return (
    <Container>
      <h2>General Settings</h2>
      <br />
      <Grid container spacing={2}>

     
      <Grid item xs={12} sm={9}>
          <Autocomplete
            disablePortal
            fullWidth
            id="combo-box-demo"
            options={categories}
            renderInput={(params) => (
              <TextField
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
                {...params}
                label="Course Categories"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button
            fullWidth
            onClick={saveCategory}
            size="large"
            fullWidth
            variant="contained"
            sx={{ float: 'left' }}
          >
            save category
          </Button>
        </Grid>


        <Grid item xs={12} sm={9}>
          <Autocomplete
            disablePortal
            fullWidth
            id="combo-box-demo"
            options={branches}
            renderInput={(params) => (
              <TextField
                onChange={(event) => {
                  setBranch(event.target.value);
                }}
                {...params}
                label="Branch"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button
            fullWidth
            onClick={saveBranch}
            size="large"
            fullWidth
            variant="contained"
            sx={{ float: 'left' }}
          >
            save Branch
          </Button>
        </Grid>

        <Grid item xs={12} sm={9}>
          <Autocomplete
            disablePortal
            fullWidth
            id="combo-box-demo"
            options={institutions}
            renderInput={(params) => (
              <TextField
                onChange={(event) => {
                  setInstitute(event.target.value);
                }}
                {...params}
                label="Institute"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button
            fullWidth
            onClick={saveInstitute}
            size="large"
            fullWidth
            variant="contained"
            sx={{ float: 'left' }}
          >
            save College
          </Button>
        </Grid>


        
        
      </Grid>
    </Container>
  );
}

export default General;
