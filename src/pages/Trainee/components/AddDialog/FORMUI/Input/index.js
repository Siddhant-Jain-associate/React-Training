import React from 'react';

import {Input} from '@material-ui/core';
import {useField} from 'formik';

const Inputs = ({name,children,...otherProps}) =>{
    const [field,meta] = useField(name)
    const configInput={
        ...field,
        ...otherProps,
        fullWidth: true,
        variant:'outlined'
    }

    if(meta && meta.touched && meta.error){
        configInput.error = true;
        configInput.helperText = meta.error;
    }
    return (
        <Input {...configInput} />
    )
}

export default Inputs;