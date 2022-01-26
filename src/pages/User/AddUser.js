import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import UserCard from './UserCard';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const UserTab = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <UserCard />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField id="outlined-basic" fullWidth label="First Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="outlined-basic" fullWidth label="Last Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="outlined-basic" fullWidth label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="outlined-basic" fullWidth label="Phone Number" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="outlined-basic" fullWidth label="Address" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="outlined-basic" fullWidth label="Branch" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField id="outlined-basic" fullWidth label="Institute" variant="outlined" />
          </Grid>

          <Grid item xs={0} sm={10.5}>
            &nbsp;
          </Grid>
          <Grid item xs={12} sm={1.5}>
            <Button variant="contained" sx={{ float: 'left' }}>
              save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ListTab = () => {
  return (
    <Grid container spacing={2}>

      <Grid item xs={12}>
        <Alert severity="success">
          <Link href="#" underline="none" color="black">
            {'underline="none"'}
          </Link>
        </Alert>
      </Grid>


      <Grid item xs={12}>
        <Alert severity="success">
          <Link href="#" underline="none" color="black">
            {'underline="none"'}
          </Link>
        </Alert>
      </Grid>


      <Grid item xs={12}>
        <Alert severity="info">
          <Link href="#" underline="none" color="black">
            {'underline="none"'}
          </Link>
        </Alert>
      </Grid>



    
    </Grid>
  );
};

function UserTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Courses" {...a11yProps(1)} />
          <Tab label="Tests" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <UserTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ListTab/>
      </TabPanel>
    </Box>
  );
}

export default function AddUser() {
  return (
    <React.Fragment>
      <h2>User</h2>
      <UserTabs />
    </React.Fragment>
  );
}
