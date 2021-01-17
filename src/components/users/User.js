import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    console.log(this.props.user);
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      company,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;
    return (
      <div className='user'>
        <p>
          <Link to='/' className='btn btn-light'>
            Back to Search
          </Link>
          <span>Hireable: </span>
          <i
            className={`fas fa-${
              hireable ? 'check text-success' : 'times text-danger'
            }`}
          ></i>
        </p>
        <div className='card grid-2 py-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              style={{ width: '150px', height: '150px' }}
              alt=''
            />
            <h2>{name}</h2>
            <p>Location: {location ? location : 'Unknown'}</p>
          </div>
          <div>
            {bio && (
              <div>
                <h3>Bio</h3>
                <p>{bio}</p>
              </div>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit Github Profile
            </a>
            <p>Username: {login}</p>
            <p>Company: {company ? company : 'Unknown'}</p>
            <p>Website: {blog ? blog : 'Unknown'}</p>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-danger'>Public Repos: {public_repos}</div>
          <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
      </div>
    );
  }
}

export default User;
