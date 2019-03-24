// dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

// style
import styles from './applet.style';

class Applet extends Component {
  componentDidMount()
  {
    console.log( 'hi' );
  }

  render() {
    // theme data
    const { classes } = this.props;

    // prop data
    const {
      CompApplet,
    } = this.props;

    const elmApplet = (CompApplet())
      ? <CompApplet styles={classes.target} />
      : (
        <div className={classes.noTarget}>
          <h2>No Applet</h2>
        </div>
      );

    return (
      <div className={classes.applet}>
        {elmApplet}
      </div>
    );
  }
}

Applet.propTypes = {
  classes: PropTypes.shape({
    applet: PropTypes.string.isRequired,
  }).isRequired,
  CompApplet: PropTypes.func,
};

Applet.defaultProps = {
  CompApplet: () => (null),
};

export default injectSheet(styles)(Applet);
