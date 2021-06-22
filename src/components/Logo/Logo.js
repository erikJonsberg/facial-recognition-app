
import React from "react";
import Tilt from "react-parallax-tilt";
import './Logo.css';
import brain from './smartbrain-logo.png';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner"> <img src={brain} alt="" /> </div>
      </Tilt>
    </div>
  );
};


export default Logo;




