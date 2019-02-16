import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ style }) => (
  <svg className={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0V0z" />
  </svg>
);

Icon.propTypes = {
  style: PropTypes.string.isRequired,
};

export default Icon;
