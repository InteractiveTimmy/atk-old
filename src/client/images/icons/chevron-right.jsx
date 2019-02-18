import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ style }) => (
  <svg className={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);

Icon.propTypes = {
  style: PropTypes.string.isRequired,
};

export default Icon;
