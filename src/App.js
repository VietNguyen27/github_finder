import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      user: {},
      loading: false,
      alert: null,
    };
  }

  // Search Github users
  searchUsers = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );

    setTimeout(() => {
      this.setState({ users: res.data.items, loading: false });
    }, 1000);
  };

  // Get single Github user
  getUser = async (username) => {
    this.setState({ loading: true });
    console.log(username);
    const res = await axios.get(`https://api.github.com/users/${username}`);

    this.setState({ user: res.data, loading: false });
  };

  // Clear users from state
  clearUsers = () => {
    this.setState({ users: [] });
  };

  // Set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };

  render() {
    const { users, user, loading } = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar icon='fab fa-github' title='Github Finder App' />

          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path={`/user/:login`}
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
