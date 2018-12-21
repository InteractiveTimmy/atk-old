import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'react-jss';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { Spacer, AppletContainer, Widgets, WidgetsList, WidgetContainer, WidgetsConfigurations, WidgetsConfiguration, WidgetsConfigurationContainer } from '../../components/index.js';

import { shadeBlend } from '../../utils/index.js';

import { Default, Secondary } from '../../themes/index.js';
import './main.scss';

import { Icons } from '../../images/index.js';

console.log( Icons );

class Main extends Component
{
  constructor ( props )
  {
    super( props );
    this.state = { theme: false };
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
                  <div className='applet-group' onClick={this.toggleTheme.bind( this )}>App Group A</div>
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

                <AppletContainer>
                  <div style={{ margin: '0.5em' }}>
                    <div style={{ margin: '1em 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Basic Content</div>
                    <WidgetsConfigurations>
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                    </WidgetsConfigurations>
                    <WidgetsConfigurations>
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                    </WidgetsConfigurations>
                    <WidgetsConfigurations>
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                    </WidgetsConfigurations>
                    <WidgetsConfigurations>
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                    </WidgetsConfigurations>
                    <div style={{ margin: '1em 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Basic Content</div>
                    <div style={{ margin: '1em 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Basic Content</div>
                    <WidgetsConfigurations>
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                    </WidgetsConfigurations>
                    <WidgetsConfigurations>
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                    </WidgetsConfigurations>
                    <WidgetsConfigurations>
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                    </WidgetsConfigurations>
                    <WidgetsConfigurations>
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                    </WidgetsConfigurations>
                    <div style={{ margin: '1em 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Basic Content</div>
                    <div style={{ margin: '1em 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Basic Content</div>
                    <WidgetsConfigurations>
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                    </WidgetsConfigurations>
                    <WidgetsConfigurations>
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                    </WidgetsConfigurations>
                    <WidgetsConfigurations>
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                    </WidgetsConfigurations>
                    <WidgetsConfigurations>
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                    </WidgetsConfigurations>
                    <div style={{ margin: '1em 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Basic Content</div>
                    <div style={{ margin: '1em 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Basic Content</div>
                    <WidgetsConfigurations>
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                    </WidgetsConfigurations>
                    <WidgetsConfigurations>
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                    </WidgetsConfigurations>
                    <WidgetsConfigurations>
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                    </WidgetsConfigurations>
                    <WidgetsConfigurations>
                      <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                    </WidgetsConfigurations>
                    <div style={{ margin: '1em 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Basic Content</div>
                    <Spacer size='0.5em' />
                  </div>
                </AppletContainer>

                <Widgets>
                  <WidgetsList>
                    <WidgetContainer>
                      <div style={{ margin: '1em 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Basic Content</div>
                    </WidgetContainer>
                    <WidgetContainer>
                      <div style={{ margin: '1em 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Some More Basic Content</div>
                    </WidgetContainer>
                    <WidgetContainer>
                      <div style={{ margin: '1em 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Even More Basic Content</div>
                    </WidgetContainer>
                    <WidgetContainer>
                      <WidgetsConfigurations>
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      </WidgetsConfigurations>
                    </WidgetContainer>
                    <WidgetContainer>
                      <WidgetsConfigurations>
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      </WidgetsConfigurations>
                    </WidgetContainer>
                    <WidgetContainer>
                      <WidgetsConfigurations>
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      </WidgetsConfigurations>
                    </WidgetContainer>
                    <WidgetContainer>
                      <WidgetsConfigurations>
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      </WidgetsConfigurations>
                    </WidgetContainer>
                    <WidgetContainer>
                      <WidgetsConfigurations>
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      </WidgetsConfigurations>
                      <WidgetsConfigurations>
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      </WidgetsConfigurations>
                      <WidgetsConfigurations>
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      </WidgetsConfigurations>
                      <WidgetsConfigurations>
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      </WidgetsConfigurations>
                    </WidgetContainer>
                    <WidgetContainer>
                      <WidgetsConfigurations>
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      </WidgetsConfigurations>
                    </WidgetContainer>
                    <WidgetContainer>
                      <WidgetsConfigurations>
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      </WidgetsConfigurations>
                      <WidgetsConfigurations>
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      </WidgetsConfigurations>
                      <WidgetsConfigurations>
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      </WidgetsConfigurations>
                      <WidgetsConfigurations>
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      </WidgetsConfigurations>
                    </WidgetContainer>
                    <WidgetContainer>
                      <WidgetsConfigurations>
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      </WidgetsConfigurations>
                    </WidgetContainer>
                    <WidgetContainer>
                      <WidgetsConfigurations>
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      </WidgetsConfigurations>
                      <WidgetsConfigurations>
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      </WidgetsConfigurations>
                      <WidgetsConfigurations>
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                        <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                      </WidgetsConfigurations>
                      <WidgetsConfigurations>
                        <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                      </WidgetsConfigurations>
                    </WidgetContainer>
                    <Spacer size='0.5em' />
                  </WidgetsList>
                  <WidgetsConfigurationContainer>
                    <div style={{ margin: '1em 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Widgets Configuration Container</div>
                  </WidgetsConfigurationContainer>
                  <WidgetsConfigurations>
                    <WidgetsConfiguration text='Tasks' Icon={Icons.TasksHistory} />
                    <WidgetsConfiguration text='Settings' Icon={Icons.WidgetSettings} />
                    <WidgetsConfiguration text='Logout' Icon={Icons.SignOut} />
                  </WidgetsConfigurations>
                </Widgets>
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