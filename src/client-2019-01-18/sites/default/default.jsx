import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';

import styles from './default.style.js';

import * as Comps from '../../components/index.js';

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
          <Comps.Brand name='Applet Name' logo='https://icons8.github.io/flat-color-icons/svg/circuit.svg' />
          <div className={classes.navigationOptions}>
            {navOptions}
          </div>
          <Comps.Info name='Display Name' status='Away' avatar='https://icons8.github.io/flat-color-icons/svg/decision.svg' />
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