import React from 'react';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import actions  from '../redux/actions';
import WatchlistForm from './WatchlistForm';
import { useSelector } from 'react-redux';




const PlayerProfile = (props) => {

  useEffect(() => {

  //  props.player.length === 0 ? props.fetchPlayerProf(props.playerPage) : console.log('loading...');
  props.playerPage !== props.player.id ? props.fetchPlayerProf(props.playerPage) : console.log('loading..');
  console.log(props.player)
  })



  // Line 25 Fetch took a longer time to process because of the serializers. So I had to wait for
  // the promise to comeback and set in redux and then check that props.player & props.player.school.name
  // existed and then I could actually render them on the page. Side-note: if something doesnt render properly
  // then try a ternary or some sort of logic to wait until it exist to render it onto the page.


  return (
    <div>
    <div className='prof-card'>

      <div className='avatar-div'>
        <img className='avatar' src={props.player.avatar === '' ? "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/11/1024/512/FootballGenericIstock.jpg?ve=1&tl=1" : props.player.avatar}  />
      </div>
      <div className='prof-head'>
      {props.user ? <i className="fa fa-plus" onClick={() => props.renderPopUp(true)}>Add To Watchlist</i> : null}<br/>
      {props.showPopUp === true ? <WatchlistForm/> : null}
      <strong>Name</strong>: {props.player.name} <br/> <strong>Height</strong>: {props.player.height}<br/> <strong>Weight</strong>: {props.player.weight}
      <br/>
      {props.player ? <div><strong>School</strong>: {props.player.school.name}</div> : null }
      {props.player ? <div><strong>Position</strong>: {props.player.position.name}</div> : null}
      </div>
      <br/>
      <div className='report-div'>
    <strong>Scouting Report</strong>: {props.player.scouting_report}
      </div>

    </div>

    <div className='comments-section'>
      <h3>Comments:</h3>
      {props.player.comments ? props.player.comments.map(comment => <div className='comments-value'>{comment.user.username}: {comment.content}</div>) : console.log('comments not mapping')}
    </div>
    {props.user ? <form onSubmit={(e) => {
      e.preventDefault()
      props.postComment(props.user.id, props.player.id, e)
    }}>
    <h4>Leave A Comment:</h4>
    <textarea rows="5" cols="80" className='comment-box' type='text-area' name='comment-input'> </textarea>
     <br/>
    <input type='submit'/>
    </form> : null}
    </div>
  )
}

const mapStateToProps = state => ({
  playerPage: state.playerPage,
  player: state.player,
  showPopUp: state.showPopUp,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  fetchPlayerProf: (player_id) => dispatch(actions.fetchPlayerProf(player_id)),
  renderPopUp: (boolean) => dispatch(actions.renderPopUpAction(boolean)),
  postComment: (userId, playerId, content) => dispatch(actions.postComment(userId, playerId, content))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfile)
