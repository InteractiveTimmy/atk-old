// external dependencies
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// actions
import { viewActions } from '../../redux/actions';

class Desktop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'hello world 2',
    };

    const { onViewReadTheme } = this.props;
    onViewReadTheme();
  }

  render() {
    const { theme, view } = this.props;
    const { value } = this.state;

    return (
      <Fragment>
        {value}
        {view}
        {JSON.stringify(theme)}
      </Fragment>
    );
  }
}

Desktop.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
  view: PropTypes.string.isRequired,
  onViewReadTheme: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  theme: state.view.theme,
  view: state.view.view,
});

const mapDispatchToProps = dispatch => ({
  onViewReadTheme: () => dispatch(viewActions.readTheme()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);
