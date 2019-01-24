import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import styles from './widgets.style.js';

class Widgets extends Component
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
      <div className={classes.Widgets}>
        {children}
      </div>
    );
  }
}

Widgets.propTypes = {
};

const mapStateToProps = state => ( {
} );

const mapDispatchToProps = dispatch => ( {
} );

export default connect( mapStateToProps, mapDispatchToProps )( injectSheet( styles )( Widgets ) );