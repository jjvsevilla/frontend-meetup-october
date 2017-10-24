import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { likeBeer } from '../actions/chelasActions';
import Item from './Item';
import './Viewer.css';

class Viewer extends PureComponent {

  likeBeer = index => {
    this.props.like(index);
  }

  render() {
    const { chelaId, chelas } = this.props;
    const chelaIndex = chelas.findIndex(chela => chela.id === chelaId);
    const chela = chelas[chelaIndex];

    return (
      <div className="chela-viewer">
        <div className="left-panel">
          <Item key={chelaIndex} index={chelaIndex} chela={chela} likeBeer={this.likeBeer} />
        </div>
        <div className="right-panel">

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  chelas: state.chelas,
  chelaId: ownProps.match.params.chelaId
})

const mapDispatchToProps = dispatch => ({
  like: index => dispatch(likeBeer(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Viewer);