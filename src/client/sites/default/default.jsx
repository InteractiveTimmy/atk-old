import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';

import styles from './default.style.js';

import * as Comps from '../../components/index.js';

class Index extends Component
{
  render ( )
  {
    const { classes } = this.props;

    return (
      <Fragment>
        <div className={classes.navigation}>
          <div style={{ height: '4em', display: 'flex', alignItems: 'center' }}>
            <img style={{ height: '3.2em', margin: '0.4em'}} src='https://icons8.github.io/flat-color-icons/svg/cloth.svg' alt='test' />
            <div>title</div>
          </div>
          <Comps.NavigationOption />
          <Comps.NavigationOption />
          <Comps.NavigationOption />
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