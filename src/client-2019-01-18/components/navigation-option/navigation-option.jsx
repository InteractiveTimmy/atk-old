import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import styles from './navigation-option.style.js';

class NavigationOption extends Component
{
  constructor ( props )
  {
    super( props );
    
    this.state = {
      selected: false
    };
  }

  onToggleSelected ( )
  {
    this.setState( prevState => ( {
      selected: !prevState.selected
    } ) );
  }

  render ( )
  {
    const { classes } = this.props;
    const { selected } = this.state;

    const workspace = [
      {
        icon: null,
        name: 'Applet A',
        status: 'success',
        notification: 4
      },
      {
        icon: null,
        name: 'Applet B',
        status: 'info',
        notification: 8
      },
      {
        icon: null,
        name: 'Applet C',
        status: 'warning',
        notification: 12
      },
      {
        icon: null,
        name: 'Applet D',
        status: 'error',
        notification: 16
      }
    ];

    const status =
      ( workspace.some( applet => applet.status === 'error' ) ) ?
      'error' :
        ( workspace.some( applet => applet.status === 'warning' ) ) ?
        'warning' :
          ( workspace.some( applet => applet.status === 'success' ) ) ?
          'success' :
            ( workspace.some( applet => applet.status === 'info' ) ) ?
            'info' :
      null;

    const notificationCount = ( ( ) => {
      let output = 0;

      for ( let applet of workspace )
      { output += applet.notification; }

      return output;
    } )( );

    const notification =
      ( workspace.some( applet => applet.notification ) ) ?
      <div className={classes.notification} data-status={status}>
        <div className={classes.notificationText}>{( notificationCount > 99 ) ? 'N' : notificationCount}</div>
      </div> :
      null;

    const applets = ( selected ) ? (
      workspace.map( ( applet, i ) => (
        <div key={i} className={classes.appletOption}>
          <div className={classes.icon}></div>
          <div className={classes.title}>{applet.name}</div>
          <div className={classes.notification} data-status={applet.status}>
            <div className={classes.notificationText}>{( applet.notification > 99 ) ? 'N' : applet.notification}</div>
          </div>
        </div>
      ) )
    ) : null;

    return (
      <div className={classes.navigationOption} data-selected={selected}>
        <div className={classes.workspaceOption} data-selected={selected} onClick={this.onToggleSelected.bind( this )}>
          <img className={classes.icon} src='https://icons8.github.io/flat-color-icons/svg/biomass.svg' />
          <div className={classes.title}>Name</div>
          {notification}
        </div>
        {applets}
      </div>
    )
  }
}

const mapStateToProps = state => ( {
} );

const mapDispatchToProps = dispatch => ( {
} );

NavigationOption.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.array
};

export default connect( mapStateToProps, mapDispatchToProps )( injectSheet( styles )( NavigationOption ) );