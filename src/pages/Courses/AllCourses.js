import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Spinner from './../../SharedComponents/Spinner';
import { Get } from './../../utils/axiosHandler';

function AllCourses() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(null);
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = React.useState(null);
  const [branch, setBranch] = React.useState(null);
  const [categories, setCategories] = React.useState([]);
  const [branchs, setBranchs] = React.useState([]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const filter = ()=>{
      console.log(search,branch,category);
  }
  useEffect(async () => {
    const res1 = await Get('/api/courses/GetCourses');
    if (res1 && res1.status === 200) setCourses(res1.data);

    const res2 = await Get('/api/home/getBranches');
    if (res2 && res2.status === 200) setBranchs(res2.data);

    const res3 = await Get('/api/home/getCategories');
    if (res3 && res3.status === 200) setCategories(res3.data);
    console.log(res1)
    setLoading(false);

  }, []);

  if(loading)
    return <Spinner/>


  return (
    <Container>
      <h2>Courses</h2>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={8} sm={4}>
          <TextField id="outlined-basic" fullWidth size="small" label="search" variant="outlined" value={search} onChange={(event)=>{setSearch(event.target.value)}} />
        </Grid>
        <Grid item xs={4} sm={1.5}>
          <Button variant="contained" onClick={filter} fullWidth>
            Search
          </Button>
        </Grid>
        <Grid item sx={{ display: { xs: 'none' } }} sm={0.5}>
          &nbsp;
        </Grid>
        <Grid item xs={6} sm={2}>
          <FormControl size="small" fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChange}
            >
                <MenuItem value={null}>None</MenuItem>
                {categories.map((category, idx) => (
                <MenuItem value={category}>{category}</MenuItem>
              ))}
              
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={4}>
          <FormControl size="small" fullWidth>
            <InputLabel id="demo-simple-select-label">Branch</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={branch}
              label="Branch"
              onChange={(event)=>{setBranch(event.target.value)}}
            >
                <MenuItem value={null}>None</MenuItem>
              {branchs.map((branch, idx) => (
                <MenuItem value={branch}>{branch}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <br />

      <Grid container spacing={2}>
        {courses.map((course, idx) => (
          <Grid item xs={6} sm={3}>
            <CourseCard name={course.name} image={course.image} noenrolls={course.noenrolls} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default AllCourses;
