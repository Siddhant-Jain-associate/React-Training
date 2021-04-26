import React,{useRef,useEffect} from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  position: relative;
  width: 70%;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
`;


const Slide = styled.div`

    display:flex;
    width:100%;
    height:450px;
    transition:transform 0.6s ease-in-out;
    transform:${props=>`translateX(${props.xPosition}px)`};

    img{
        width:100%;
        height:100%;
    }
`;


const Slider = (props)=>{

    const slideRef = useRef();
    useEffect(()=>{
        if(slideRef.current){
            const width = slideRef.current.clientWidth;
            console.log(width);
            props.setWidth(width);
        }
    },[props.setWidth])



    return (
        <Wrapper>
            <Slide xPosition={props.xPosition} ref={slideRef}>
                {props.images.map((img,i)=>{
                    return(
                    <img src={process.env.PUBLIC_URL+img} alt="images" key={i} />)
                })}
            </Slide>
        </Wrapper>
    )
}

export default Slider;