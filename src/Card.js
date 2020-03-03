import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className='Card'>
      <img className="avatar" alt="User's avatar" src={props.imgsrc} />
      <p>{props.name}</p>
      <p className='session'>
        {props.inSession ? "In session" : "Not in session"}
      </p>
      <p>{props.onStage ? "On Stage" : "Not on Stage"}</p>
    </div>
  )
}