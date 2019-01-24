import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './navigation-option.style.js';

class NavigationOption extends Component
{
  constructor ( props )
  {
    super( props );

    this.state = {
      hover: false
    }
  }

  onMouseOver ( )
  {
    if ( !this.state.hover )
    {
      this.setState( ( ) => ( {
        hover: true
      } ) );
    }
  }

  onMouseOut ( )
  {
    if ( this.state.hover )
    {
      this.setState( ( ) => ( {
        hover: false
      } ) );
    }
  }

  render ( )
  {
    const { classes, Icon, name, large } = this.props;
    const { hover } = this.state;

    const elmIcon = ( ( Icon ) ?
      ( <Icon classes={( large ) ? classes.iconLarge : classes.icon} /> ) :
      null
    );

    const elmHover = ( ( hover && name ) ?
      (
        <div className={classes.hover}>
          <h6>{name}</h6>
        </div>
      ) : null
    );


    return (
      <div
        className={( large ) ? classes.navigationOptionLarge : classes.navigationOption}
        onMouseOver={this.onMouseOver.bind( this )}
        onMouseOut={this.onMouseOut.bind( this )}
      >
        {elmIcon}
        {elmHover}
      </div>
    )
  }
}

NavigationOption.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.func,
  name: PropTypes.string
};

export default injectSheet( styles )( NavigationOption );