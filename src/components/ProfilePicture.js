import React from 'react';
import {connect} from 'react-redux';
import {useEffect, useState} from 'react';
import actions  from '../redux/actions';

const ProfilePicture = (props) => {


  const [imgUrl] = useState(document.querySelector('.this-img').src)



  function previewFile() {
  var preview = document.querySelector('.this-img');
  var file    = document.querySelector('input[name=pic]').files[0];
  var reader  = new FileReader();


  reader.addEventListener("load", function () {
    console.log(reader.result);
    preview.src = reader.result;


  }, false);

  if (file) {
    reader.readAsDataURL(file)

  }
}

  function getPreviewData() {

  }


  return (
    <div>
      <h3>Update Your Profile-Picture</h3>

      <div className='current-avatar'>
        <h5>Current Picture</h5>
        <img className='user-avatar' src={props.user.avatar}/>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault()

        props.changeAvatar(props.user.id, imgUrl)
      }}>
        <img id='blah' className='pic-test' src='https://www.bostonherald.com/wp-content/uploads/2019/12/snowms010.jpg'/>
        <input type="file" name="pic"
        onChange={(e) => {

          previewFile(e.target)
          console.log(imgUrl);
        }
         }
         accept="image/*"
         />
        <input type='submit'/>
        <img className='this-img' src=''/>
      </form>

    </div>
  )



}

const mapStateToProps = state => ({
  user: state.user,
  showAvatarChange: state.showAvatarChange
})

const mapDispatchToProps = dispatch => ({
  changeAvatar: (userObj, imgObj) => dispatch(actions.changeAvatar(userObj, imgObj))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicture)
