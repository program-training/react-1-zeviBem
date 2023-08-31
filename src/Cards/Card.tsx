
import React, { useState } from 'react';
import "./card.css"
interface CardProps {
  title: string;
  imagePath: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ title, imagePath, text }) => {
  const [backgroundColor, setBackgroundColor] = useState<string>('');

  const buttonChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setBackgroundColor(event.target.value);
  };

  return (
    <div className="card" style={{ backgroundColor }}>
      <img src={imagePath} alt={title} className='imgClass'/>
      <h2>{title}</h2>
      <p>{text}</p>
      <select value={backgroundColor} onChange={buttonChange}>
        <option value="">Select Background Color</option>
        <option value="lightblue">Light Blue</option>
        <option value="lightgreen">Light Green</option>
        <option value="lightpink">Light Pink</option>
        <option value="lightyellow">Light Yellow</option>
      </select>
    </div>
  );
};

export default Card;