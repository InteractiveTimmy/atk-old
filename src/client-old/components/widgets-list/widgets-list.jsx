import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

import styles from './widgets-list.style.js';

class WidgetsList extends Component
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
      <div className={classes.WidgetsList}>
        <PerfectScrollbar>
          {children}
        </PerfectScrollbar>
      </div>
    );
  }
}

WidgetsList.propTypes = {
};

const mapStateToProps = state => ( {
} );

const mapDispatchToProps = dispatch => ( {
} );

export default connect( mapStateToProps, mapDispatchToProps )( injectSheet( styles )( WidgetsList ) );