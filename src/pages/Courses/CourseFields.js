import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Spinner from './../../SharedComponents/Spinner';
import { Get } from './../../utils/axiosHandler';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5)
}));

function SelectField(props) {
  const [val, setVal] = React.useState(props.defaultopition);

  const handleChange = (event) => {
    setVal(event.target.value);
    props.setOption(props.options[event.target.value]);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={val}
          label={props.name}
          onChange={handleChange}
        >
          {props.options.map((option, index) => (
            <MenuItem value={index}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

function CosArray(props) {
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0
      }}
      component="ul"
    >
      {props.chips.map((data, idx) => {
        return (
          <ListItem key={data.key}>
            <Chip label={data} onDelete={() => props.deleteCo(props.chips[idx])} />
          </ListItem>
        );
      })}
    </Paper>
  );
}

export default function EditFields(props) {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [playListId, setplayListId] = useState('');
  const [image, setImage] = useState('');
  const [branch, setBranch] = useState('');
  const [category, setCategory] = useState('');
  const [channelName, setChannelName] = useState('');
  const [co, setCo] = useState('');
  const [cos, setCos] = useState([]);
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [branchs, setBranchs] = useState([]);

  

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleCoChange = (event) => {
    setCo(event.target.value);
  };

  const saveCo = () => {
    console.log(co);
    const newcos = [...cos, co];
    setCos(newcos);
    setCo('');
  };

  const deleteCo = (removeChip) => {
    const newcos = cos.filter(function (co) {
      return co !== removeChip;
    });
    setCos([...newcos]);
  };

  const saveCourse = async () => {
    console.log(name, playListId, image, branch, category, channelName, description, cos);
    props.handler(name, playListId, image, branch, category, channelName, description, cos);
  };

  useEffect(async () => {
    const res1 = await Get('/api/home/getCategories');
    if (res1) setCategories(res1.data);

    const res2 = await Get('/api/home/getBranches');
    if (res2) setBranchs(res2.data);

    if (props.course) {
      if (props.course.name) setName(props.course.name);
  
      if (props.course.playListId) setplayListId(props.course.playListId);
  
      if (props.course.image) setImage(props.course.image);
  
      if (props.course.branch) setBranch(props.course.branch);
  
      if (props.course.category) setCategory(props.course.category);
  
      if (props.course.channelName) setChannelName(props.course.channelName);
  
      if (props.course.cos) setCos(props.course.cos);
  
      if (props.course.description) setDescription(props.course.description);
    }

    setLoading(false);
  }, []);

  if (loading) return <Spinner />;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          id="outlined-basic"
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
          fullWidth
          label="Name Of The Course"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="outlined-basic"
          onChange={(event) => {
            setplayListId(event.target.value);
          }}
          value={playListId}
          fullWidth
          label="Youtube PlayList ID"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="outlined-basic"
          onChange={(event) => {
            setImage(event.target.value);
          }}
          value={image}
          fullWidth
          label="Image Url"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="outlined-basic"
          onChange={(event) => {
            setChannelName(event.target.value);
          }}
          value={channelName}
          fullWidth
          label="Channel Name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SelectField
          name="category"
          defaultopition={categories.indexOf(category)}
          options={categories}
          setOption={setCategory}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SelectField name="branch" defaultopition={branchs.indexOf(branch)} options={branchs} setOption={setBranch} />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField
          id="outlined-basic"
          multiline
          rows={4}
          value={description}
          onChange={handleDescriptionChange}
          fullWidth
          label="Course Description"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <CosArray chips={cos} deleteCo={deleteCo} />
      </Grid>
      <Grid item xs={12} sm={10}>
        <TextField
          id="outlined-basic"
          value={co}
          onChange={handleCoChange}
          fullWidth
          label="Course outcomes"
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} sm={2}>
        <Button variant="contained" fullWidth onClick={saveCo} size="large">
          Add co
        </Button>
      </Grid>

      <Grid item xs={12} sm={12}>
        <br />
      </Grid>

      <Grid item xs={0} sm={10}>
        &nbsp;
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button fullWidth onClick={saveCourse} variant="contained" sx={{ float: 'left' }}>
          save course
        </Button>
      </Grid>
    </Grid>
  );
}
