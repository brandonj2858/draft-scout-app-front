import React from 'react';
import { useSelector } from 'react-redux';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import setPositions from '../redux/actions';
import PositionList from '../components/PositionList';
import PositionRankings from '../components/PositionRankings';
import PlayerProfile from '../components/PlayerProfile';

const Home = (props) => {
//  useEffect(() => {
//    props.setPositions()
//  })

  console.log(props)
  const username = useSelector(state => state.user);
  const text = username ? (
    <p className='login-indicator'>{props.user.username} is currently logged in</p>
  ) : (
    <p className='login-indicator'>Welcome Guest</p>
  );
  return <div>{text}
  <div className = "mainContainer">
    <div id="left" className="column">

      <div className='top-left'><h3 className='rank-head'>Rankings by Pos.</h3> </div>
      <div className='bottom'>

      <br/>
      <ul className='positions-ul'>
    <PositionList/>
      </ul>
      </div>
    </div>
    <div id='right' className='column'>
      <div className='top-right'> <h3 className='sep-head'>Top Scouts</h3></div>
      <div className='bottom'>
        <PositionRankings/>
        <br/>
        {props.playerPage.length === 0 ? console.log("Cant do it"): <PlayerProfile/>}
      </div>
    </div>
    </div>

  </div>;

};

  const mapStateToProps = state => ({
   user: state.user,
   playerPage: state.playerPage
  })

export default connect(mapStateToProps)(Home);
