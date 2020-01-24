import React from 'react';
import {connect} from 'react-redux';
import {useEffect, useState} from 'react';
import actions  from '../redux/actions';

const ProfileSettings = (props) => {
  return(
    <div>
      <h1>Profile Page</h1>
    </div>
  )
}

const mapStateToProps = state => (console.log(state.showWatchlist), {
  user: state.user,
})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings)
