import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogForm from './components/AddDialog/AddDialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    Dialog: {
      margin: '10px'
    }
  }));


const TraineeList = (props) =>{
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmpassword: ''
  }

  const handleClose = () => {
    setOpen(false);
  };
    const classes = useStyles();
    return(
        <div className={classes.Dialog}>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Add Trainee
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">ADD TRAINEE</DialogTitle>
          <DialogContent>
            <DialogForm INTIAL_FORM_STATE={INITIAL_FORM_STATE} clicked={handleClose} />
          </DialogContent>
        </Dialog>
        <ul>
            {props.data.map(i=>{
                return(<li  key={i.id}><Link to={`/trainee/${i.id}`}>{i.name}</Link></li>)
            })}
        </ul>
        </div>
    )

}


export default TraineeList;