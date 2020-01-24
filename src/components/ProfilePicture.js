import React from 'react';
import {connect} from 'react-redux';
import {useEffect, useState} from 'react';
import actions  from '../redux/actions';

const ProfilePicture = (props) => {


  const [imgUrl] = useState('')
  var reader  = new FileReader();



  function previewFile() {
  var preview = document.querySelector('.this-img');
  var file    = document.querySelector('input[name=pic]').files[0];
  var reader  = new FileReader();
  console.log(props.user.avatar)


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
        <img className='user-avatar' src={(props.user.avatar)}/>
      </div>
      <form className="picture_form" onSubmit={(e) => {
        e.preventDefault()
        const pic_upload = document.querySelector(".pic")
        const pic_form = document.querySelector(".picture_form")
        const formData = new FormData(pic_form);
        const formData2 = new FormData();
        formData2.append(
          "image_file",
          pic_upload.files[0],
          pic_upload.files[0].name
        );
        props.changeAvatar(props.user.id, formData2)
        console.log(formData);
      }}>
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
