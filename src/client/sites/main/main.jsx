import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'react-jss';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { Default, Secondary } from '../../themes/index.js';
import './main.scss';

class Main extends Component
{
  constructor ( props )
  {
    super( props );
    this.state = { theme: false }
  }

  toggleTheme ( )
  { this.setState( prevState => ( { theme: !prevState.theme } ) ); }

  render ( )
  {
    return (
      <Fragment>
        <Helmet>
          <title>Application Tool Kit</title>
        </Helmet>
          <ThemeProvider theme={( this.state.theme ) ? Secondary : Default}>
            <div id='main'>
              <div className='header'>
                <div className='logo'>Logo</div>
                <div className='scroll'>🡄</div>
                <div className='applet-groups'>
                  <div className='applet-group'>App Group A</div>
                  <div className='applet-group'>App Group B</div>
                  <div className='applet-group'>App Group C</div>
                  <div className='applet-group'>App Group D</div>
                </div>
                <div className='scroll'>🡆</div>
                <div className='widget-groups'>
                  <div className='widget-group'>WG</div>
                  <div className='widget-group'>WG</div>
                  <div className='widget-group'>WG</div>
                </div>
              </div>
              <div className='content'>
                <div className='applets'>
                  <div className='scroll'>🡅</div>
                  <div className='applets-list'>
                    <div className='applet-selector'>Applet Selector</div>
                    <div className='applet-selector'>Applet Selector</div>
                    <div className='applet-selector'>Applet Selector</div>
                    <div className='applet-selector'>Applet Selector</div>
                  </div>
                  <div className='scroll'>🡇</div>
                  <div className='applets-expander'>● ● ●</div>
                </div>
                <div id='applet-container'>Applet</div>
                <div className='widgets'>
                  <div className='widgets-list'>
                    <div className='widget-container'>Widget</div>
                    <div className='widget-container'>Widget</div>
                    <div className='widget-container'>Widget</div>
                    <div className='widget-container'>Widget</div>
                    <div className='widget-container'>Widget</div>
                    <div className='widget-container'>Widget</div>
                    <div className='widget-container'>Widget</div>
                    <div className='widget-container'>Widget</div>
                    <div className='widget-container'>Widget</div>
                    <div className='widget-container'>Widget</div>
                    <div className='widget-container'>Widget</div>
                    <div className='widget-container'>Widget</div>
                  </div>
                  <div className='widgets-configurations'>
                    <div className='widgets-configuration'>WC</div>
                    <div className='widgets-configuration'>WC</div>
                    <div className='widgets-configuration'>WC</div>
                  </div>
                </div>
              </div>
            </div>
          </ThemeProvider>
      </Fragment>
    )
  }
}

Main.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default Main;