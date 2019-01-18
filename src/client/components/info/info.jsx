import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './info.style.js';

class Info extends Component
{
  render ( )
  {
    const { classes, name, status, avatar } = this.props;

    return (
      <div className={classes.info}>
        <img className={classes.avatar} src={avatar} alt={name} />
        <div className={classes.details}>
          <div className={classes.name}>{name}</div>
          <div className={classes.status}>
            <div className={classes.statusIcon} data-status={status.toLowerCase( )} />
            <div className={classes.statusText}>{status}</div>
          </div>
        </div>
      </div>
    )
  }
}

Info.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  status: PropTypes.string,
  avatar: PropTypes.string
};

export default injectSheet( styles )( Info );