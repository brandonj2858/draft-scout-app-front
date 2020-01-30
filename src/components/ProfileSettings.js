import React from 'react';
import {connect} from 'react-redux';
import {useEffect, useState} from 'react';
import actions  from '../redux/actions';

const ProfileSettings = (props) => {
  console.log(props.user.created_at.slice(0, -14))

  return(
    <div className="prof-info">
      <h2><strong>Username</strong> - {props.user.username}</h2>
      <h2><strong>Date Joined</strong> - {props.user.created_at.slice(0, -14)}</h2>
      <h2><strong>Scout</strong> - No</h2>
    </div>
  )
}

const mapStateToProps = state => (console.log(state.showWatchlist), {
  user: state.user,
})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings)
