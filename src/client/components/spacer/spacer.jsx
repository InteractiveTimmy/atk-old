import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Spacer extends Component
{
  render ( )
  {
    const { size } = this.props;

    return ( <div style={{ minHeight: size, maxHeight: size }} /> )
  }
}

Spacer.propTypes = {
  size: PropTypes.string.isRequired
};

export default Spacer;