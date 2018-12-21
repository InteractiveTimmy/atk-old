import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import styles from './applet-container.style.js';

class AppletContainer extends Component
{
  constructor ( props )
  { super( props ); }

  componentWillMount ( )
  {
  }

  render ( )
  {
    const { classes, children } = this.props;

    return (
      <div className={classes.AppletContainer}>
        {children}
      </div>
    )
  }
}

AppletContainer.propTypes = {
};

const mapStateToProps = state => ( {
} );

const mapDispatchToProps = dispatch => ( {
} );

export default connect( mapStateToProps, mapDispatchToProps )( injectSheet( styles )( AppletContainer ) );