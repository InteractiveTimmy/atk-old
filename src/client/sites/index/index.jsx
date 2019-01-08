import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'react-jss';
import { Helmet } from 'react-helmet';

import themes from './themes.js';

import * as Comps from '../../components/index.js';

import './index.css';

class Index extends Component
{
  constructor ( props )
  {
    super( props );

    this.state = {
      themeIndex: 0
    };

    window.addEventListener( 'resize', ( ) => {
      this.setState( prevSate => ( {
        window: [ window.innerWidth, window.innerHeight ]
      } ) );
    } );
  }

  render ( )
  {
    const { themeIndex } = this.state;

    return (
      <Fragment>
        <Helmet>
          <title>Application Tool Kit</title>
        </Helmet>
        <ThemeProvider theme={themes[themeIndex]}>
          <Fragment>
            <Comps.Workspaces />
            <div className='main'>
              <div className='header'>
                <div className='title'>Title</div>
                <div className='widgets'>Widgets</div>
              </div>
              <div className='content'>
                <div className='applet'>applet</div>
                <div className='widget'>widget</div>
              </div>
            </div>
          </Fragment>
        </ThemeProvider>
      </Fragment>
    )
  }
}

export default Index;