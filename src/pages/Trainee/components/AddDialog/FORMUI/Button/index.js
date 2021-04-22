import React from 'react';
import {Button} from '@material-ui/core';
import {useFormikContext} from 'formik';

const ButtonWrapper = ({children,...Otherprops}) =>{

    const {submitForm} = useFormikContext();

    const handleSubmit = () =>{
        submitForm();
    }
    const configButton = {
        variant:'contained',
        color:'primary',
        fullWidth:true,
        onClick:handleSubmit,
        ...Otherprops
    }
    return (
        <Button {...configButton}>
            {children}
        </Button>
    )
}

export default ButtonWrapper;