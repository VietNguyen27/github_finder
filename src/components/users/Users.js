import React from 'react';
import UserItem from './UserItem';
import Spinner from './../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  const renderUser = () => {
    return users.map((user) => {
      return <UserItem key={user.id} user={user} />;
    });
  };
  if (loading) {
    return <Spinner />;
  } else {
    return <div className='grid-3'>{renderUser()}</div>;
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
