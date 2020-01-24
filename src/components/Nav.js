import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';
import {connect} from 'react-redux';

const Nav = (props) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };
  return (
    <nav className='nav-bar' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Link to="/">Home</Link>
      {props.user ? null : <Link to="/signup">Signup</Link>}
      {props.user ? null : <Link to="/login">Login</Link>}
      {props.user ? <Link to="/user_profile">Profile</Link> : null}
      <Link to="/" onClick={handleLogout}>
        Logout
      </Link>
    </nav>
  );
};

const mapStateToProps = state => (console.log(state.user),{
  user: state.user
})

export default connect(mapStateToProps)(Nav);
