// dependencies
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import { shadeBlend } from '../../utils';

// actions
import { menuActions } from '../../redux/actions';

// style
import styles from './menu-option.style';

class MenuOption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };
  }

  handleMouseOver(v) {
    this.setState(() => ({
      isHovered: v,
    }));
  }

  render() {
    // theme data
    const { classes } = this.props;

    // prop data
    const { Icon, children, size } = this.props;

    // state data
    const { isHovered } = this.state;

    const elmIcon = <Icon style={classes.icon} data-size={size} />;

    return (
      <div
        className={classes.menuOption}
        data-size={size}
        onMouseEnter={this.handleMouseOver.bind(this, true)}
        onMouseLeave={this.handleMouseOver.bind(this, false)}
      >
        <div className={classes.iconContainer} data-size={size}>
          {elmIcon}
        </div>
        <div className={classes.tooltip} data-visible={isHovered}>
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
  size: PropTypes.string,
};

MenuOption.defaultProps = {
  size: 'medium',
}

export default injectSheet(styles)(MenuOption);
