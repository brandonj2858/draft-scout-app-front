import React from 'react';
import {connect} from 'react-redux';
import {useEffect, useState} from 'react';
import actions  from '../redux/actions';
import WatchlistShow from '../components/WatchlistShow';


const UserProfile = (props) => {
console.log(props)
return (
  <div className="prof-body">
  <div >
    <h2 className="prof-heading">{props.user.username}'s Profile Page</h2>
    <img src="" />

  </div><div className='watchlist-box'>
    {props.user.watchlists.map(watchlist =>
      <ul>
        <div className='list-card'>
          <li  onClick={() => props.renderWatchlist()}>
          <img className='card-img' src='https://static.bhphoto.com/images/images2500x2500/1366909880_910864.jpg'/>

          <div className='card-name'>
            {watchlist.name}
          </div>

          <div className='card-details'>
            <i className='count-icon'><i className="fa fa-users"> </i></i>{watchlist.watchlist_players.length}
              <div className='detail-name'>
                Players
              </div>
          </div>


          </li>
        </div>
      </ul>

    )}</div>

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
