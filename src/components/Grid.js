import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { likeBeer } from '../actions/chelasActions';
import Item from './Item';
import './Grid.css';

class Grid extends PureComponent {

  renderItems = () => {
    const { chelas, comments } = this.props;
    return chelas.map((chela, i) => <Item key={i} index={i} chela={chela} likeBeer={this.likeBeer} comments={comments[chela.id]} />);
  }

  likeBeer = index => {
    this.props.like(index);
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
  chelas: state.chelas,
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  like: index => dispatch(likeBeer(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);