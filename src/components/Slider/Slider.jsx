import React from 'react';
import './Slider.css';



const Slider = (props)=>{
    const style={
        margin:"auto"
    }
    return(
        <div>
            <img style={style} src={props.defaultBanner} alt={props.altText} height={props.height} random={props.random} />
        </div>
    )
}
export default Slider;