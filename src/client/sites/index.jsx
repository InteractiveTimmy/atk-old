import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'react-jss';
import { Helmet } from 'react-helmet';

import * as Sites from './index.js';

import theme from './theme.js';
import sites from './sites.js';

import './index.scss';

class Index extends Component
{
  constructor ( props )
  {
    super( props );

    this.state = {
      site: this.getSite( ),
      theme: theme
    };

    window.addEventListener( 'resize', ( ) => {
      if ( this.getSite( ) !== this.state.site )
      {
        this.setState( prevState => ( {
          site: this.getSite( prevState.theme )
        } ) );
      }
    } );
  }

  getSite ( )
  { return sites.find( site => site.condition( ) ); }

  render ( )
  {
    const { site, theme } = this.state;
    const Site = React.createElement( Sites[site.name] );

    return (
      <Fragment>
        <Helmet>
          <title>{`Application Tool Kit - ${site.name}`}</title>
        </Helmet>
        <ThemeProvider theme={theme}>
          <Fragment>
            {Site}
          </Fragment>
        </ThemeProvider>
      </Fragment>
    )
  }
}

export default Index;