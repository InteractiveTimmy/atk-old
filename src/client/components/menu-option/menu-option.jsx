// dependencies
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

// actions
import { menuActions } from '../../redux/actions';

// style
import styles from './menu-option.style';

class MenuOption extends Component {
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
    const { Icon, children } = this.props;

    const elmIcon = <Icon style={classes.icon} />;

    return (
      <div className={classes.menuOption}>
        <div className={classes.iconContainer}>
          {elmIcon}
        </div>
        <div className={classes.nameContainer}>
          {children}
        </div>
        <div className={classes.tooltip}>
          <div className={classes.tooltipArrow} />
          <div className={classes.tooltipText}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

MenuOption.propTypes = {
  Icon: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    menuOption: PropTypes.string.isRequired,
  }).isRequired,
};

export default injectSheet(styles)(MenuOption);
