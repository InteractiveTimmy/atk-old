import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ style }) => (
  <svg className={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
  </svg>
);

Icon.propTypes = {
  style: PropTypes.string.isRequired,
};

export default Icon;
