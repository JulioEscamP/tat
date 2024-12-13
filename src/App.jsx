import React, { useEffect, useRef } from 'react';
import './App.css';
import Flower from './Flower'; // Import the Flower component

const ScrollingText = ({ speed = 70, direction = 'left-to-right', text }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Fill the screen width with repeated text if needed
    const scrollingText = container.querySelector('.scrolling-text-content');
    const scrollTextWidth = scrollingText.offsetWidth;
    const windowWidth = window.innerWidth;

    if (scrollTextWidth < windowWidth) {
      const repeatTimes = Math.ceil(windowWidth / scrollTextWidth);
      scrollingText.textContent = Array(repeatTimes).fill(text).join(' ');
    }

    // Set the height dynamically for multi-line display
    const scrollTextHeight = scrollingText.offsetHeight;
    container.style.height = `${scrollTextHeight}px`;
  }, [text]);

  return (
    <div
      className={`container ${
        direction === 'left-to-right' ? 'left-to-right' : ''
      }`}
      speed={speed}
      ref={containerRef}
    >
      <div className="scrolling-text">
        <h2 className="scrolling-text-content">{text}</h2>
      </div>
    </div>
  );
};

const App = () => {
  const rows = Array.from({ length: 7 }, (_, index) => ({
    speed: 70 + index * 10,
    direction: index % 2 === 0 ? 'left-to-right' : 'right-to-left',
    text: 'Feliz cumpleaños Tat',
  }));

  return (
    <div className="app">
      {/* Background and scrolling text */}
      <div className="text-background">
        {rows.map((row, index) => (
          <ScrollingText
            key={index}
            speed={row.speed}
            direction={row.direction}
            text={row.text}
          />
        ))}
      </div>

      {/* Flower Component below the text */}
      <div className="flower-container">
        <Flower />
      </div>
    </div>
  );
};

export default App;