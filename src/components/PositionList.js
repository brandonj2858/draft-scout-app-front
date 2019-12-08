import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import setPositions from '../redux/actions';
import handleClickAction from '../redux/actions';


const PositionList = (props) => {

  useEffect(() => {
    console.log(props.clickedPositionId)
   props.positions.length === 0 ? props.setPositions() : console.log('loading...')
  })

  const filterOffense = (positions) => {
    return positions.filter(position => {
      return position.side === 'offense'
    })
  }

  const filterDefense = (positions) => {
    return positions.filter(position => {
      return position.side === 'defense'
    })
  }

  return (<div className='positionContainer'>
    <div className="pos-container-head">Offense</div>
    {filterOffense(props.positions).map(position => <li onClick={() => props.handleClickAction(position.id)} key={position.id} className="position-list">{position.name}</li>)}
    <div className="pos-container-head">Defense</div>
    {filterDefense(props.positions).map(position => <li onClick={() => props.handleClickAction(position.id)} key={position.id} className="position-list">{position.name}</li>)}
   </div>)
}

const mapStateToProps = state => ({
  positions: state.positions,
  clickedPositionId: state.clickedPositionId
})

const mapDispatchToProps = dispatch => ({
  handleClickAction: handleClickAction
})

export default connect(mapStateToProps, setPositions)(PositionList);
