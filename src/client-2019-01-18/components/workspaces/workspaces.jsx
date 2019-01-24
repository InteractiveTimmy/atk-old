import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import styles from './workspaces.style.js';

class Workspaces extends Component
{
  render ( props )
  {
    const { classes } = this.props;

    return (
      <div className={classes.workspaces}>
        Workspaces
      </div>
    );
  }
}

Workspaces.propTypes = {
};

/*
const mapStateToProps = state => ( {
} );

const mapDispatchToProps = dispatch => ( {
} );
*/

export default injectSheet( styles )( Workspaces );
// export default connect( mapStateToProps, mapDispatchToProps )( injectSheet( styles )( Workspaces ) );