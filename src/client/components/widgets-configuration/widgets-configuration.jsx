import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import styles from './widgets-configuration.style.js';

class WidgetsConfiguration extends Component
{
  constructor ( props )
  { super( props ); }

  componentWillMount ( )
  {
  }

  render ( )
  {
    const { classes, text, Icon } = this.props;

    return (
      <div className={classes.WidgetsConfiguration}>
        {( Icon ) ? ( <Icon classes={classes.Icon} /> ) : null}
        {( text ) ? ( <div className={classes.Text}>{text}</div> ) : null }
      </div>
    );
  }
}

WidgetsConfiguration.propTypes = {
};

const mapStateToProps = state => ( {
} );

const mapDispatchToProps = dispatch => ( {
} );

export default connect( mapStateToProps, mapDispatchToProps )( injectSheet( styles )( WidgetsConfiguration ) );