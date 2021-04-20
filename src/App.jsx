import React from 'react';
import {useEffect,useState} from 'react';
import Pages from './pages/index';
import PropTypes from 'prop-types';
import Slider from './components/Slider/Slider';
import {getNextRoundRobin} from './libs/utils/math';

function App(props) {

  const path = ['cloud.jpg','default.png','dns-server.png','full-stack-web-development.jpg','js.jpg','load-balancer.png'];

  const [images,setImages] = useState([]);
  const [defaultImage,setDefaultImages] = useState('/images/default.png');
  const [duration,setDuration] = useState(2000);
  const [height,setHeight]= useState(200);
  const [random,setRandom] = useState(false);
  useEffect(() => {
    let interval = setInterval(getNextRoundRobin,2000);
    console.log(interval);
    return () => {
      clearInterval(interval);
    }
  },[]);
  
  return (
    <div>
            <Slider defaultBanner={defaultImage} altText="Default Banner" random={random.toString()} height={props.height}/>
             <Pages />
    </div>
  );
}

App.propTypes = {
  defaultBanner:PropTypes.string,
  height:PropTypes.number,
  duration:PropTypes.number,
  banners:PropTypes.array,
  random:PropTypes.bool,
}

export default App;