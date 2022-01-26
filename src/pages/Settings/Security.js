import React from 'react';
import {useState} from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Security() {
    const [password,setPassword] = useState('');
    const [showPassword,setShowPassword] = useState(false);
   
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
  return (
    <Container>
      <h2>Security Settings</h2>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Email Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(event)=>{setPassword(event.target.value)}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={(event)=>{setShowPassword(!showPassword)}}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Email Password"
          />
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
        <Button fullWidth onClick={()=>{}} size='large' fullWidth variant="contained" sx={{ float: 'left' }}>
              save changes
            </Button>
        </Grid>
       
       
      </Grid>
    </Container>
  );
}

export default Security;
