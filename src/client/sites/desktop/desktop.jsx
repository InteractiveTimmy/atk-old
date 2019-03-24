// dependencies
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from 'react-jss';

// actions
import { menuActions, viewActions } from '../../redux/actions';

// components
import {
  // Applet,
  Menu,
  MenuOption,
  Widget,
  Applet,
} from '../../components';

import { Icons } from '../../images';

// style
import './desktop.css';

class Desktop extends Component {
  componentWillMount() {
    // view
    const { onViewLoadColors, onViewSetSite } = this.props;

    // menu
    const {
      onMenuLoadBrand,
      onMenuLoadPrimary,
      onMenuLoadSecondary,
      onMenuLoadAccount,
    } = this.props;

    onViewLoadColors();
    onViewSetSite();

    onMenuLoadBrand();
    onMenuLoadPrimary();
    onMenuLoadSecondary();
    onMenuLoadAccount();
  }

  render() {
    // menu data
    const { view, menu } = this.props;

    if (!menu.brand.name) { return (<div />); }

    const elmMenuBrand = <MenuOption Icon={Icons[menu.brand.icon]} size="large">{menu.brand.name}</MenuOption>;

    const elmMenuOptionsPrimary = menu.primary.map(option => (
      <MenuOption key={option.name} Icon={Icons[option.icon]}>{option.name}</MenuOption>
    ));

    const elmMenuOptionsSecondary = menu.secondary.map(option => (
      <MenuOption key={option.name} Icon={Icons[option.icon]} size="small">{option.name}</MenuOption>
    ));

    const elmMenuAccount = <MenuOption Icon={Icons[menu.account.icon]} size="large">{menu.account.name}</MenuOption>;

    const CompWidget = () => (null);

    return (
      <ThemeProvider theme={view}>
        <Fragment>
          <Menu
            brand={elmMenuBrand}
            primary={elmMenuOptionsPrimary}
            secondary={elmMenuOptionsSecondary}
            account={elmMenuAccount}
          />
          <Widget
            collapsed={false}
            ExpanderIcon={Icons.ChevronLeft}
            CompWidget={CompWidget}
          />
          <Applet />
        </Fragment>
      </ThemeProvider>
    );
  }
}

Desktop.propTypes = {
  view: PropTypes.shape({
    colors: PropTypes.shape({
      foreground: PropTypes.string,
      background: PropTypes.string,
      targetcolor: PropTypes.string,
      primary: PropTypes.string,
      accent: PropTypes.string,
      success: PropTypes.string,
      processing: PropTypes.string,
      warning: PropTypes.string,
      error: PropTypes.string,
    }),
    site: PropTypes.string,
  }).isRequired,
  menu: PropTypes.shape({
    brand: PropTypes.object,
    primary: PropTypes.array,
    secondary: PropTypes.array,
    account: PropTypes.object,
  }).isRequired,
  onMenuLoadBrand: PropTypes.func.isRequired,
  onMenuLoadPrimary: PropTypes.func.isRequired,
  onMenuLoadSecondary: PropTypes.func.isRequired,
  onMenuLoadAccount: PropTypes.func.isRequired,
  onViewLoadColors: PropTypes.func.isRequired,
  onViewSetSite: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  view: {
    colors: state.view.colors,
    site: state.view.site,
  },
  menu: {
    brand: state.menu.brand,
    primary: state.menu.primary,
    secondary: state.menu.secondary,
    account: state.menu.account,
  },
});

const mapDispatchToProps = dispatch => ({
  onViewLoadColors: () => dispatch(viewActions.loadColors()),
  onViewSetSite: () => dispatch(viewActions.setSite()),
  onMenuLoadBrand: () => dispatch(menuActions.loadBrand()),
  onMenuLoadPrimary: () => dispatch(menuActions.loadPrimary()),
  onMenuLoadSecondary: () => dispatch(menuActions.loadSecondary()),
  onMenuLoadAccount: () => dispatch(menuActions.loadAccount()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Desktop);
