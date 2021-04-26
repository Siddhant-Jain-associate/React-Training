import React from 'react';
import {Button} from '@material-ui/core';

const ButtonWrapper = ({children,...Otherprops}) =>{
    const configButton = {
        variant:'contained',
        color:'primary',
        fullWidth:true,
        ...Otherprops,
    }
    return (
        <Button {...configButton}>
            {children}
        </Button>
    )
}

export default ButtonWrapper;