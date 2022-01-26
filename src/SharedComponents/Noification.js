import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification(props) {
  const [open, setOpen] = React.useState(props.open);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.handler({open:false});
  };
// success error
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={props.open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.success?"success":"error"} sx={{ width: '100%' }}>
          {props.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}