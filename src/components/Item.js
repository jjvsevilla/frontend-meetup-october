import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './Item.css';

const Item = ({ chela, likeBeer, index }) => (
  <figure className="chela-item">
    <div className="image-wrapper">
      <Link to={`/view/${chela.id}`}>
        <img src={chela.image} alt={chela.name} />
      </Link>
    </div>
    <figcaption className="caption">
      <p>{chela.name}</p>
      <div className="actions">
        <button className="likes" onClick={() => likeBeer(index)}>
          <span role="img" aria-label="beer">🍺</span> {chela.likes}
        </button>
      </div>
    </figcaption>
  </figure>
)

export default Item;