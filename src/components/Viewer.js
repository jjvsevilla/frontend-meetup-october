import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import './Viewer.css';

class Viewer extends PureComponent {
  render() {
    const { chelaId, chelas } = this.props;
    const chelaIndex = chelas.findIndex(chela => chela.id === chelaId);
    const chela = chelas[chelaIndex];

    return (
      <div className="chela-viewer">
        <div className="left-panel">
          <Item key={chelaIndex} index={chelaIndex} chela={chela} />
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

export default connect(
  mapStateToProps
)(Viewer);