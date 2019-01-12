import React, { Component, Fragment } from 'react';

// import * as Comps from '../../components/index.js';

class Index extends Component
{
  render ( )
  {
    return (
      <Fragment>
        <div className='view'>
          <div className='header'>Header</div>
          <div className='content'>
            <div className='applet'>Applet</div>
            <div className='widget'>Widget</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Index;