import React from 'react';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import actions  from '../redux/actions';

const WatchlistShow = (props) => {

  return(
    <div className='watchlist-content'>
      {props.user.watchlist_players.map(player => <div className='player-card'>{player.player.name}</div>)}

    </div>
  )


}

const mapStateToProps = state => ({
  watchlists: state.watchlists,
  user: state.user
})

export default connect(mapStateToProps)(WatchlistShow)
