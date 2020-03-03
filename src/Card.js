import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className='Card'>
      <img className="avatar" alt="User's avatar" src={props.imgsrc} />
      <p>{props.name}</p>
      <p>{props.inSession ? "On Stage" : "Not on Stage"}</p>
    </div>
  )
}