import React from 'react';
import './style.css';


const TextField = (props)=>{
    let error=null;
    if(props.error){
        error =<p className="error">Could not be greater than</p>
    }
    return(
        <div>
            <h3>{props.heading}</h3>
            <input className={props.class} type="text" disabled={props.disabled} value={props.value} readOnly={true}/>
            {error}
        </div>
    )
}
export default TextField;