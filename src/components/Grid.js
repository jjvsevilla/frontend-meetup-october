import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import './Grid.css';
import Item from './Item';

class Grid extends PureComponent {

  renderItems = () => {
    return this.props.chelas.map((chela, i) => <Item key={i} index={i} chela={chela} />);
  }

  render () {
    return (
      <div className="chela-list">
        {this.renderItems()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  chelas: state.chelas
});

export default connect(
  mapStateToProps
)(Grid);