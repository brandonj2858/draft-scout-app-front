import React from 'react';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import actions  from '../redux/actions';

const WatchlistShow = (props) => {

  return(
    <div>

    <div className='watchlist-card-container'>
    <ul className='watchlist-ul'>
    {props.user.watchlists.map(watchlist =>

        <div className='list-card'>


          <li >
            <div className="list-card-inner">
              <div className='list-card-front'>
                <img className='card-img' src='https://static.bhphoto.com/images/images2500x2500/1366909880_910864.jpg'/>

                <div className='card-name'>
                  {watchlist.name}
                </div>

                <div className='card-details'>
                  <i className='count-icon'><i className="fa fa-users"> </i></i>{watchlist.watchlist_players.length}
                    <div className='detail-name'>
                      {watchlist.watchlist_players.length === 1 ? 'Player' : 'Players'}
                    </div>
                </div>

              </div>

          <div className='list-card-back'>
            {watchlist.players.map(player => <li>{player.name}</li>)}
          </div>

            </div>
          </li>



        </div>


    )}</ul></div></div>

  )


}

const mapStateToProps = state => ({
  watchlists: state.watchlists,
  user: state.user
})

export default connect(mapStateToProps)(WatchlistShow)
