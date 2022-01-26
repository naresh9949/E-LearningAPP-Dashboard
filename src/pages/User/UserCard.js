import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

export default function UserCard() {
  return (
    <Card align="center">
      <CardContent>
        <Avatar alt="Remy Sharp" src="https://png.pngtree.com/element_our/sm/20180524/sm_5b072d393d61e.jpg" sx={{ width: 96, height: 96 }} />

        <Typography variant="h5" component="div">
          Naresh Kollipora
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          nareshkollipora@gmail.com
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Id
        </Typography>
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="User Verified"
          labelPlacement="start"
        />
       
       
      </CardContent>
    </Card>
  );
}
