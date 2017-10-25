import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { likeBeer } from '../actions/chelasActions';
import Item from './Item';
import Comments from './Comments';
import './Viewer.css';

class Viewer extends PureComponent {

  likeBeer = index => {
    this.props.like(index);
  }

  render() {
    const { chelaId, chelas, comments } = this.props;
    const chelaIndex = chelas.findIndex(chela => chela.id === chelaId);
    const chela = chelas[chelaIndex];
    const chelaComments = comments[chelaId] || [];

    return (
      <div className="chela-viewer">
        <div className="left-panel">
          <Item key={chelaIndex} index={chelaIndex} chela={chela} likeBeer={this.likeBeer} comments={chelaComments} />
        </div>
        <div className="right-panel">
          <Comments chelaComments={chelaComments} chelaId={chelaId} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  chelas: state.chelas,
  comments: state.comments,
  chelaId: ownProps.match.params.chelaId
})

const mapDispatchToProps = dispatch => ({
  like: index => dispatch(likeBeer(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Viewer);