
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './pages';
import {connect} from 'react-redux';

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/signup" component={Pages.Signup} />
      <Route path="/login" component={Pages.Login} />
      <Route exact path="/" component={Pages.Home} />
      <Route exact path="/user_profile" component={Pages.UserProfile} />
      <Route exact path="/new_watchlist" component={Pages.CreateWatchlist} />
    </Switch>
  );
};

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Routes);
