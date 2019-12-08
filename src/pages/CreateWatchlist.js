import React from 'react';
import {connect} from 'react-redux';
import {useEffect, useState} from 'react';
import actions  from '../redux/actions';

const CreateWatchlist = (props) => {

const [nameInput, setnameInput] = useState("")


  return  (<div>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.submitWatchlist(props.user, nameInput)
      }}>
        <input type='text' onChange={(e) => setnameInput(e.target.value)} value={nameInput}/>
        <input type='submit'/>
      </form>
    </div>)
}

const mapStateToProps = state => (console.log(state.formInput),{
  formInput: state.formInput,
  user: state.user,
  formInput: state.formInput

})

const mapDispatchToProps = dispatch => ({
  submitWatchlist: (userObj, userInput) => dispatch(actions.submitWatchlist(userObj, userInput))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateWatchlist)
