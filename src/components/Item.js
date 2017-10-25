import React from 'react';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import './Item.css';

const Item = ({ chela, likeBeer, index, comments }) => (
  <figure className="chela-item">
    <div className="image-wrapper">
      <Link to={`/view/${chela.id}`}>
        <img src={chela.image} alt={chela.name} />
      </Link>
      <CSSTransitionGroup
        transitionName="like"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        <span key={chela.likes} className="likes-animation">{chela.likes}</span>
      </CSSTransitionGroup>
    </div>
    <figcaption className="caption">
      <p>{chela.name}</p>
      <div className="actions">
        <button className="likes" onClick={() => likeBeer(index)}>
          <span role="img" aria-label="beer">🍺</span> {chela.likes}
        </button>
        <Link to={`/view/${chela.id}`} className="button">
          <span role="img" aria-label="comments">💬 {comments ? comments.length : 0}</span>
        </Link>
      </div>
    </figcaption>
  </figure>
)

export default Item;