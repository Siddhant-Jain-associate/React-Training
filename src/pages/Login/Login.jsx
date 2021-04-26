import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Container, Grid, InputAdornment, IconButton } from '@material-ui/core';
import MailIcon from "@material-ui/icons/Mail";
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import TextField from '../../Components/FORMUI/TextField';
import Button from '../../Components/FORMUI/Button';
import { Visibility, VisibilityOff } from '@material-ui/icons';





const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: 'auto',
      position: 'absolute',
      top: '20%',
      left: '33%',
      width: theme.spacing(50),
      height: theme.spacing(60),
    },
  },
  Icon: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginLeft: '40%',
    marginTop: '20px'
  },
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },

}));

export default function SimplePaper() {
  const classes = useStyles();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };







  const FORM_INITIAL_STATE = {
    email: '',
    password: ''
  }
  const loginValidation = yup.object().shape({
    email: yup.string().email("Please Enter valid Email").required('Email is Required'),
    password: yup
      .string()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),

  })

  return (
    
    <div className={classes.root}>
      <Paper elevation={24}>

        <AccountCircleIcon className={classes.Icon} color='secondary' />
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <Grid container >
          <Grid item xs={12}>
            <Container>
              <div className={classes.formWrapper}>
                <Formik

                  initialValues={{ ...FORM_INITIAL_STATE }}
                  validationSchema={loginValidation}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}

                >
                  <Form>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField name="email" label="Email"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <MailIcon />
                              </InputAdornment>
                            )
                          }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          name="password"
                          label="Password"
                          type={showPassword ? 'text' : 'password'}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                              </InputAdornment>
                            )
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button color='primary' type="submit">SIGN IN</Button>
                      </Grid>
                    </Grid>

                  </Form>
                </Formik>
              </div>
            </Container>
          </Grid>

        </Grid>

      </Paper>
    </div>
   
  );
}
