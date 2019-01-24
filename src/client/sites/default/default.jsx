import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';

import styles from './default.style.js';

import * as Comps from '../../components/index.js';
import * as Images from '../../images/index.js';

class Index extends Component
{
  render ( )
  {
    const { classes } = this.props;

    const navOptions = [ ];

    // generate nav options
    for ( let x = 0; x < 20; x++ )
    { navOptions.push( <Comps.NavigationOption key={x} /> ); }

    return (
      <Fragment>
        <div className={classes.navigation}>
          <Comps.NavigationOption Icon={Images.Icons.Brand} name='Brand' large />
          <div className={classes.navUpper}>
            <Comps.NavigationOption Icon={Images.Icons.Games} name='Games' />
            <Comps.NavigationOption Icon={Images.Icons.Music} name='Music' />
            <Comps.NavigationOption Icon={Images.Icons.Movies} name='Movies' />
          </div>
          <div className={classes.navLower}>
            <Comps.NavigationOption Icon={Images.Icons.Chat} name='Conversations' />
            <Comps.NavigationOption Icon={Images.Icons.Notifications} name='Notifications' />
            <Comps.NavigationOption Icon={Images.Icons.AccountCircle} name='Account' large />
          </div>
        </div>
        <div className={classes.widget}>c</div>
        <div className={classes.applet}>c</div>
      </Fragment>
    );
  }
}

export default ( injectSheet( styles )( Index ) );