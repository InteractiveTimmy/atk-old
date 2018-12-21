import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

import styles from './widgets-configuration-container.style.js';

class WidgetsConfigurationContainer extends Component
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
      <div className={classes.WidgetsConfigurationContainer}>
        {children}
      </div>
    )
  }
}

WidgetsConfigurationContainer.propTypes = {
};

const mapStateToProps = state => ( {
} );

const mapDispatchToProps = dispatch => ( {
} );

export default connect( mapStateToProps, mapDispatchToProps )( injectSheet( styles )( WidgetsConfigurationContainer ) );