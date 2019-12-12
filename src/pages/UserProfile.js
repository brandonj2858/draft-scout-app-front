import React from 'react';
import {connect} from 'react-redux';
import {useEffect, useState} from 'react';
import actions  from '../redux/actions';
import WatchlistShow from '../components/WatchlistShow';
import ProfilePicture from '../components/ProfilePicture';


const UserProfile = (props) => {
console.log(props)
return (
  <div className="prof-body">

  <h2 className="prof-heading">{props.user.username}'s Profile Page</h2>
  <div className='prof-buttons'>



    <button type="button"  onClick={() => props.renderWatchlist()} class="btn btn-info">Show Watchlists</button>
    <br/>
    <button type="button" onClick={() => props.showAvatarComp()} class="btn btn-info">Upload Profile-Picture</button>
    <br/>
    <button type="button" class="btn btn-info">View Profile Settings</button>



  </div>
    {props.showAvatarChange === true ? <div className='avatar-show'> <ProfilePicture/></div>: null}
    {props.showWatchlist === true ? <div className='list-show'><WatchlistShow/></div> : null}
  </div>
)




}

const mapStateToProps = state => (console.log(state.showWatchlist), {
  user: state.user,
  showWatchlist: state.showWatchlist,
  showAvatarChange: state.showAvatarChange
})

const mapDispatchToProps = ({
  renderWatchlist: () => ({type: 'SHOW_WATCHLIST'}),
  showAvatarComp: () => ({type: 'SHOW_AVATAR_CHANGE'})
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
