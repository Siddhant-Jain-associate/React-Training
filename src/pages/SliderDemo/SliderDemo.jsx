import React,{useState,useEffect} from 'react';

import Slider from '../../components/Slider/Slider';
import styled from "styled-components";

const Wrapper = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  
  `;
  
  const SliderDemo = ()=>{
    const [index,setIndex] = useState(0);
    const [width,setWidth] = useState(0);
    const [xPosition,setXPosition] = useState(0);

    const images= ['/images/cloud.jpg','/images/default.png','/images/dns-server.png','/images/full-stack-web-development.jpg','/images/js.jpg'];

    const handleClicknext = () =>{
      if(index === images.length-1){
        setIndex(0);
        setXPosition(0);
      }else{
        setIndex(index+1);
        setXPosition(xPosition-width);
      }
    }

    useEffect(() => {
      let Autoplay = setInterval(handleClicknext,3000);
      return () => {
        clearInterval(Autoplay);
      }
    }, [handleClicknext])


    return(
      <Wrapper classname="SliderDemo">
        <Slider
        images={images}
        setWidth={setWidth}
        xPosition={xPosition}
        handleClicknext={handleClicknext}
        />
      </Wrapper>
  )
}

export default SliderDemo;