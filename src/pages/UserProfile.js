import React from 'react';
import {connect} from 'react-redux';
import {useEffect, useState} from 'react';
import actions  from '../redux/actions';
import WatchlistShow from '../components/WatchlistShow';
import ProfilePicture from '../components/ProfilePicture';
import ProfileSettings from '../components/ProfileSettings';

/* for change avatar button.
<button type="button" onClick={() => props.showAvatarComp()} class="btn btn-info">Upload Profile-Picture</button>*/


const UserProfile = (props) => {
console.log(props)
return (
  <div className="prof-body">

  <h2 className="prof-heading">{props.user.username}'s Profile Page</h2>
  <div className='prof-buttons'>



    <button type="button"  onClick={() => props.renderWatchlist()} class="btn btn-info">Show Watchlists</button>
    <br/>
    <br/>
    <button type="button" onClick={() => props.renderProfileSettings()} class="btn btn-info">View Profile Settings</button>



  </div>
    {props.showAvatarChange === true ? <div className='avatar-show'> <ProfilePicture/></div>: null}
    {props.showWatchlist === true ? <div className='list-show'><WatchlistShow/></div> : null}
    {props.showProfileSettings === true ? <div> <ProfileSettings/> </div> : null}
  </div>
)




}

const mapStateToProps = state => (console.log(state.showWatchlist), {
  user: state.user,
  showWatchlist: state.showWatchlist,
  showAvatarChange: state.showAvatarChange,
  showProfileSettings: state.showProfileSettings
})

const mapDispatchToProps = ({
  renderWatchlist: () => ({type: 'SHOW_WATCHLIST'}),
  showAvatarComp: () => ({type: 'SHOW_AVATAR_CHANGE'}),
  renderProfileSettings: () => ({type: 'RENDER_PROFILE_SETTINGS'})
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
