// dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

// style
import styles from './widget.style';

class Widget extends Component {
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
    const {
      collapsed,
      ExpanderIcon,
      CompWidget,
    } = this.props;

    const elmWidget = (CompWidget())
      ? <CompWidget styles={classes.target} />
      : (
        <div className={classes.noTarget}>
          <h2>No Widget</h2>
        </div>
      );

    return (
      <div className={classes.widget} data-collapsed={collapsed}>
        <div className={classes.header}>
          <div className={classes.headerContainer}>
            <div className={classes.headerText}>
              <h4>Widget Title</h4>
              <h6 className={classes.subtitle}>Subtitle about Widget</h6>
            </div>
            <div className={classes.collapser}>
              <div className={classes.iconContainer}>
                <ExpanderIcon style={classes.icon} />
              </div>
            </div>
          </div>
        </div>
        {elmWidget}
      </div>
    );
  }
}

Widget.propTypes = {
  classes: PropTypes.shape({
    widget: PropTypes.string.isRequired,
  }).isRequired,
  collapsed: PropTypes.bool.isRequired,
  ExpanderIcon: PropTypes.func.isRequired,
  CompWidget: PropTypes.func,
};

Widget.defaultProps = {
  CompWidget: () => (null),
};

export default injectSheet(styles)(Widget);
