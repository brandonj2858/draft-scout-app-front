import React from 'react';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import actions  from '../redux/actions';
import {withRouter} from 'react-router-dom';
import CreateWatchlist from '../pages/CreateWatchlist'


const WatchlistForm = (props) => {
console.log(props.user)

useEffect(() => {
  console.log(props.watchlists.length)
  props.watchlists.length === undefined ? props.fetchWatchlists() : console.log('not working')
 console.log(props.watchlists)
})

const filterWatchlist = (watchlists) => {
  return watchlists.filter(watchlist => {
    return watchlist.user_id == props.user.id
  })
}

  return (

    <div className='pop-up'>
      <div className='pop-up-body'>
        <h2>Select a Watchlist.</h2>
        {props.watchlists.length !== undefined ? <div className='watchlist_card'>{props.watchlists.map(watchlist => <div onClick={() => props.postPlayer(watchlist, props.player) }className='user-watchlists'>
          <h3>{watchlist.name}</h3>
          <i class="fa fa-users"></i> {watchlist.watchlist_players.length}

          </div>)}</div>
          : <h3>You have no watchlists!</h3>}
          <button onClick={props.openForm} >Create Watchlist</button>
          <button onClick={props.closePopUp}>Close</button><br/>
          {props.showForm === true ? 'What would you like to call your watchlist?' : null} {props.showForm === true ? <CreateWatchlist/> : null}
        <form>

          <option> </option>
        </form>

      </div>
    </div>
  )

}

const mapStateToProps = state => (console.log(state.watchlists),{
  playerPage: state.playerPage,
  player: state.player,
  user: state.user,
  watchlists: state.watchlists,
  showPopUp: state.showPopUp,
  showForm: state.showForm
})

const mapDispatchToProps = dispatch => ({
  fetchWatchlists: () => dispatch(actions.fetchWatchlists()),
  closePopUp: () => dispatch(actions.closePopUp()),
  postPlayer: (watchlistObj, playerObj) => dispatch(actions.postPlayer(watchlistObj, playerObj)),
  openForm: () => dispatch(actions.openForm())
})


//withRouter gives the history prop so I can use routes
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WatchlistForm))
