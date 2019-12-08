import React from 'react';
import {connect} from 'react-redux';
import {useEffect, useState} from 'react';
import actions  from '../redux/actions';
import WatchlistShow from '../components/WatchlistShow'


const UserProfile = (props) => {
console.log(props)
return (
  <div>
    <h2>{props.user.username}'s Profile Page</h2>

    {props.user.watchlists.map(watchlist => <div onClick={() => props.renderWatchlist()} >{watchlist.name}</div>)}

    {props.showWatchlist === true ? <WatchlistShow/> : null}
  </div>
)




}

const mapStateToProps = state => (console.log(state.showWatchlist), {
  user: state.user,
  showWatchlist: state.showWatchlist
})

const mapDispatchToProps = ({
  renderWatchlist: () => ({type: 'SHOW_WATCHLIST'})
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
