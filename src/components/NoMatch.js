import React from 'react';
import NotFoundImg from '../imgs/404-Face.png';
import './NoMatch.css';

const NoMatch = () => {
  return (
    <div className="not-found-page">
      <img src={NotFoundImg} alt="Not found!"/>
      <p>404 - Not found!</p>
    </div>
  )
}

export default NoMatch;