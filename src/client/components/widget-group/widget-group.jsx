import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import styles from './widget-group.style.js';

class WidgetGroup extends Component
{
  constructor ( props )
  { super( props ); }

  componentWillMount ( )
  {
  }

  render ( )
  {
    const { classes, Icon } = this.props;

    return (
      <div className={classes.WidgetGroup}>
        {( Icon ) ? ( <Icon classes={classes.Icon} /> ) : null}
      </div>
    );
  }
}

WidgetGroup.propTypes = {
};

const mapStateToProps = state => ( {
} );

const mapDispatchToProps = dispatch => ( {
} );

export default connect( mapStateToProps, mapDispatchToProps )( injectSheet( styles )( WidgetGroup ) );