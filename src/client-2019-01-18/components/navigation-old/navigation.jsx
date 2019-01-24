import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import { setView } from '../../redux/actions/view-actions.js';
import { getWorkspaces } from '../../redux/actions/workspace-actions.js';

import styles from './navigation.style.js';

class Navigation extends Component
{
  constructor ( props )
  {
    super( props );
  }

  componentWillMount ( )
  {
    if ( this.props.view.navigation === undefined )
    {
      this.props.onSetView( {
        ...this.props.view,
        navigation: true
      } );
    }

    this.props.onGetWorkspaces( );
  }

  toggle ( )
  {
    this.props.onSetView( {
      ...this.props.view,
      navigation: !this.props.view.navigation
    } );
  }

  render ( )
  {
    console.log( 'test', this.props );

    const { classes, theme, view, workspaces } = this.props;

    const options = workspaces.map( ( workspace, i ) => (
      <Fragment key={i}>
        <div className='workspace' data-selected={workspace.selected}>
          {( workspace.icon ) ? ( <img className='icon' src={workspace.icon} alt='' /> ) : null}
          <div className='name'>{workspace.name}</div>
          {( workspace.notifications ) ? ( <div className='notifications'>{workspace.notifications}</div> ) : null }
        </div>
        {
          ( workspace.applets ) ?
          (
            <div className='applets'>
              {
                workspace.applets.map( ( applet, i ) => (
                  <div key={i} className='workspace'>
                    <div className='icon' />
                    <div className='name'>{applet.name}</div>
                    {( applet.notifications ) ? ( <div className='notifications'>{applet.notifications}</div> ) : null }
                  </div>
                ) )
              }
            </div>
          ) : null
        }
      </Fragment>
    ) );

    // options => workspace => [ icon, name, applets => [ icon, name, src ] ]

    return (
      <div className={`${classes.navigation} no-select`} data-display={theme.display} data-visible={view.navigation}>
        {
          ( view.navigation ) ?
          (
            <Fragment>
              <div className='branding'>
                <img className='image' src='https://icons8.github.io/flat-color-icons/svg/electronics.svg' alt='' />
                <div className='text'>ATK</div>
                {( theme.display == 'Compact' ) ? ( <img className='image' src='https://icons8.github.io/flat-color-icons/svg/menu.svg' alt='' onClick={this.toggle.bind( this )}/> ) : null}
              </div>
              <div className='options'>
                {options}
              </div>
            </Fragment>
          ) : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => ( {
  view: state.view,
  workspaces: state.workspaces.workspaces
} );

const mapDispatchToProps = dispatch => ( {
  onSetView: ( view ) => dispatch( setView( view ) ),
  onGetWorkspaces: ( ) => dispatch( getWorkspaces( ) )
} );

Navigation.propTypes = {
  view: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  onSetView: PropTypes.func.isRequired,
  workspaces: PropTypes.array.isRequired,
};

export default connect( mapStateToProps, mapDispatchToProps )( injectSheet( styles )( Navigation ) );