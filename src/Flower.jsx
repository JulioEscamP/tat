import React, { useEffect } from "react";
import './Flower.css'; // Ensure to import the CSS for the flower animation

const Flower = () => {
    return (
      <div className="flower">
        {/* First Flower */}
        <div className="f-wrapper">
          <div className="flower__line"></div>
          <div className="f">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__leaf flower__leaf--5"></div>
            <div className="flower__leaf flower__leaf--6"></div>
            <div className="flower__leaf flower__leaf--7"></div>
            <div className="flower__leaf flower__leaf--8 flower__fall-down--yellow"></div>
          </div>
        </div>
  
        {/* Second Flower */}
        <div className="f-wrapper f-wrapper--2">
          <div className="flower__line"></div>
          <div className="f">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__leaf flower__leaf--5"></div>
            <div className="flower__leaf flower__leaf--6"></div>
            <div className="flower__leaf flower__leaf--7"></div>
            <div className="flower__leaf flower__leaf--8 flower__fall-down--pink"></div>
          </div>
        </div>
  
        {/* Third Flower */}
        <div className="f-wrapper f-wrapper--3">
          <div className="flower__line"></div>
          <div className="f">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__leaf flower__leaf--5"></div>
            <div className="flower__leaf flower__leaf--6"></div>
            <div className="flower__leaf flower__leaf--7"></div>
            <div className="flower__leaf flower__leaf--8 flower__fall-down--purple"></div>
          </div>
        </div>
  
        {/* Flower Glass */}
        <div className="flower__glass"></div>
      </div>
    );
  };
  
  export default Flower;  