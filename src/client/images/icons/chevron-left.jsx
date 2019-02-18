import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ style }) => (
  <svg className={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
  </svg>
);

Icon.propTypes = {
  style: PropTypes.string.isRequired,
};

export default Icon;
