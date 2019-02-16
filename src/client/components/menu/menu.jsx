// dependencies
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

// actions
import { menuActions } from '../../redux/actions';

// style
import styles from './menu.style';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
    };
  }

  render() {
    // theme data
    const { classes } = this.props;

    // prop data
    const { brand, primary, secondary } = this.props;

    return (
      <div className={classes.menu}>
        <div className={classes.brand}>
          {brand}
        </div>
        <div className={classes.primary}>
          {primary}
        </div>
        <div className={classes.secondary}>
          {secondary}
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  brand: PropTypes.element.isRequired,
  primary: PropTypes.arrayOf(PropTypes.element).isRequired,
  secondary: PropTypes.arrayOf(PropTypes.element).isRequired,
  classes: PropTypes.shape({
    menu: PropTypes.string.isRequired,
  }).isRequired,
};

export default injectSheet(styles)(Menu);
