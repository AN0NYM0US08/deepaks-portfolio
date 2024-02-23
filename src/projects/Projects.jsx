import React from 'react';
import "./Projects.css";

const IconContainer = ({ xmlns, data }) => {
  return (
    <div className="container">
      {data.map((item, index) => (
        <div key={index} data-text={item.text} style={{'--r': item.rotation}} className="glass">
          <svg viewBox={item.viewBox} height="9em" xmlns={xmlns}>
            {item.imageUrl && <a href={item.path}><image className='svgimage' href={item.imageUrl} width="100%" height="100%" /></a>}
          </svg>
        </div>
      ))}
    </div>
  );
};

export default IconContainer;
