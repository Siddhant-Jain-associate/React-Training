import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import TextField from './FORMUI/TextField';
import { IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff ,LockIcon} from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import Button from './FORMUI/Button/index';



const useStyles = makeStyles((theme) => ({
    formWrapper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(8),
    },
}));



const App = (props) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setshowConfPass] = React.useState(false);

    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    //   };
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleClickShowConfirmPassword = () => {
        setshowConfPass(!showConfirmPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const formValidation = yup.object().shape({
        firstName: yup.string().min(3, "Too Short!").max(50, "Too Long!").required('FirstName is required'),
        lastName: yup.string().min(2, "Too Short!").max(50, "Too Long!").required('Last Name is required'),
        email: yup.string().email("Please Enter valid Email").required('Email is Required'),
        password: yup
            .string()
            .required('Please Enter your password')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        confirmpassword: yup.string().required('Confirm Password is required').oneOf([yup.ref('password')], 'Passwords does not match'),

    })


    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Container maxWidth="md">
                    <div className={classes.formWrapper}>

                        <Formik
                            initialValues={{ ...props.INTIAL_FORM_STATE }}
                            validationSchema={formValidation}
                        >
                            <Form>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            name="firstName"
                                            label="FirstName"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <PersonIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField name="lastName"
                                            label="LastName"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <PersonIcon/>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField name="email" label="Email" 
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <MailIcon/>
                                                </InputAdornment>
                                            )
                                        }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            name="password"
                                            label="Password"
                                            type={showPassword ? 'text' : 'password'}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
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
                                    <Grid item xs={6}>
                                        <TextField
                                            name="confirmpassword"
                                            label="Confirm Password"
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowConfirmPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button disabled={!Formik.isValid} >SUBMIT</Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        </Formik>
                    </div>
                </Container>
            </Grid>

        </Grid>
    );
}

export default App;
