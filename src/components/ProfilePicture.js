import React from 'react';
import {connect} from 'react-redux';
import {useEffect, useState} from 'react';
import actions  from '../redux/actions';

const ProfilePicture = (props) => {

  const [setImgSource, imgSource] = useState('')

  return (
    <div>
      <h3>Update Your Profile-Picture</h3>

      <div className='current-avatar'>
        <h5>Current Picture</h5>
        <img className='user-avatar' src={props.user.avatar}/>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.changeAvatar(props.user.id, e.target['pic'].files)
      }}>

        <input type="file" name="pic" accept="image/*"/>
        <input type='submit'/>

      </form>

    </div>
  )



}

const mapStateToProps = state => ({
  user: state.user

})

const mapDispatchToProps = dispatch => ({
  changeAvatar: (userObj, imgObj) => dispatch(actions.changeAvatar(userObj, imgObj))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicture)
