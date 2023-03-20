import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>



      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dsialog-slide-description"
        sx={{ color: "white.main", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor:"red" }}
      >

        {/* <Grid container sx={{backgroundColor:"red", display: "flex", justifyContent: "center", alignItems: "center" ,marginTop: "10%", position: "relative"}} > */}

        {/* <Box sx={{ display: "flex", width: 550, height: 400, backgroundColor: "#EDEDED", padding: 2, borderRadius: 3 }}> */}

        <DialogTitle variant='title2' sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          Use Google's location service lalalaalall?
        </DialogTitle>


        <DialogContent sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

          <DialogContentText variant="text5" id="alert-dialog-slide-description" sx={{ color: "white.main" }}>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>

        </DialogContent>


        <DialogActions sx={{ display: "flex", justifyContent: "center", alignItems: "center", typography: "title1" }}>

          <Button variant="outlined" sx={{ color: "white.main", borderColor: "white.main" }} onClick={handleClose}>Disagree</Button>
          <Button variant="outlined" sx={{ color: "white.main", borderColor: "white.main" }} onClick={handleClose}>Agree</Button>

        </DialogActions>

        {/* </Box> */}

        {/* </Grid> */}

      </Dialog>

    </div>
  );
}