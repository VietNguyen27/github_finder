import React, { Fragment } from 'react';
import spinner from './../layout/spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt='' style={spinnerStyle} />
    </Fragment>
  );
};

const spinnerStyle = {
  width: '200px',
  margin: 'auto',
  display: 'block',
};

export default Spinner;
