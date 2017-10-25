import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import beerJS from '../imgs/BeerJS.png';

const formattedText = title => {
  const spans = title.split('').map(x => `<span>${x}</span>`).join('');
  return spans;
};

const Header = (props) => {
  const { title } = props;
  const spans = formattedText(title);
  return (
    <div className="header-wrapper">
      <Link to="/" className="header">
        <img src={beerJS} alt={title} />
        <div className="logo" dangerouslySetInnerHTML={{__html: spans}}></div>
      </Link>
    </div>
  )
}

export default Header;
