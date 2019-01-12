// externals
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from 'react-jss';
import { Helmet } from 'react-helmet';

// redux
import { getTheme, setMode } from '../redux/actions/view-actions.js';

// site collection
import * as Sites from './index.js';

// fill data
import sites from './sites.js';

// base style
import './index.scss';

class Index extends Component
{
  constructor ( props )
  {
    super( props );

    // generate event listener for window size
    window.addEventListener( 'resize', ( ) => {
      if ( sites.find( site => site.condition( ) ).name !== this.props.theme.display )
      { this.props.onSetMode( sites.find( site => site.condition( ) ).name ); }
    } );
  }

  componentWillMount ( )
  {
    this.props.onSetMode( sites.find( site => site.condition( ) ).name );
    this.props.onGetTheme( );
  }

  render ( )
  {
    const { theme, mode } = this.props;

    const Site = ( mode ) ? React.createElement( Sites[mode] ) : null;

    return (
      <Fragment>
        <Helmet>
          <title>{`Application Tool Kit - ${mode}`}</title>
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

const mapStateToProps = state => ( {
  theme: state.view.theme,
  mode: state.view.mode
} );

const mapDispatchToProps = dispatch => ( {
  onGetTheme: ( ) => dispatch( getTheme( ) ),
  onSetMode: ( mode ) => dispatch( setMode( mode ) )
} );

Index.propTypes = {
  theme: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  onGetTheme: PropTypes.func.isRequired,
  onSetMode: PropTypes.func.isRequired
};

// export default Index;
export default connect( mapStateToProps, mapDispatchToProps )( Index )