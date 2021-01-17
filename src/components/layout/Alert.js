import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <p className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'></i> {alert.msg}
      </p>
    )
  );
};

export default Alert;
