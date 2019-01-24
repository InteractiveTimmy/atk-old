import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './brand.style.js';

class Brand extends Component
{
  render ( )
  {
    const { classes, logo, name } = this.props;

    return (
      <div className={classes.brand}>
        <img className={classes.logo} src={logo} alt={name} />
        <div className={classes.name}>{name}</div>
      </div>
    )
  }
}

Brand.propTypes = {
  classes: PropTypes.object.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default injectSheet( styles )( Brand );