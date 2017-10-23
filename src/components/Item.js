import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { likeBeer } from '../actions/chelasActions';
import './Item.css';

class Item extends PureComponent {

  likeBeer = () => {
    const { index } = this.props;
    this.props.like(index);
  }

  render() {
    const { chela } = this.props;
    return (
      <figure className="chela-item">
        <div className="image-wrapper">
          <Link to={`/view/${chela.id}`}>
            <img src={chela.image} alt={chela.name} />
          </Link>
        </div>
        <figcaption className="caption">
          <p>{chela.name}</p>
          <div className="actions">
            <button className="likes" onClick={this.likeBeer}>
              <span role="img" aria-label="beer">🍺</span> {chela.likes}
            </button>
          </div>
        </figcaption>
      </figure>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  like: index => dispatch(likeBeer(index))
});

export default connect(
  null,
  mapDispatchToProps
)(Item);