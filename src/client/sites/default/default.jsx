import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';

import styles from './default.style.js';

// import * as Comps from '../../components/index.js';

class Index extends Component
{
  render ( )
  {
    const { classes } = this.props;

    return (
      <Fragment>
        <div className={classes.navigation}>
          <div>brand</div>
          <div>menu</div>
        </div>
        <div className={classes.view}>
          <div className={classes.header}>
            <div>title</div>
            <div>widgets</div>
          </div>
          <div className={classes.content}>
            <div className={classes.applet}>Applet</div>
            <div className={classes.widget}>Widget</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ( injectSheet( styles )( Index ) );