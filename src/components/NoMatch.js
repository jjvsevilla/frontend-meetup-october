import React from 'react';
import './NoMatch.css';

const NoMatch = () => {
  return (
    <div className="not-found-page">
      <img src={`${process.env.PUBLIC_URL}/404-Face.png`} alt="Not found!"/>
      <p>404 - Not found!</p>
    </div>
  )
}

export default NoMatch;