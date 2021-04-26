import React from 'react';


function Math(props) {
    return (
        <div>
            {props.first} {props.operator} {props.second} <span>{props.equal}</span> {props.result}
            {props.children}
        </div>
    )
}


export default Math;


