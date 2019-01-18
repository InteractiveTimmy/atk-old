import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( ( Object.keys( theme ).length !== 0 ) ? {
  info: {
    height: '4em',
    backgroundColor: shadeBlend( 0.09, theme.accent, theme.target ),
    flexShrink: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    userSelect: 'none'
  },

  avatar: {
    height: '3.2em',
    width: '3.2em',
    margin: '0.4em'
  },

  details: {
    height: '3.2em',
    margin: '0.4em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  status: {
    fontSize: '0.8em',
    display: 'flex',
    alignItems: 'center'
  },

  statusIcon: {
    transition: 'background-color 0.2s',
    width: '0.8em',
    height: '0.8em',
    borderRadius: '0.4em',
    marginRight: '0.4em',

    '&[data-status=online]': {
      backgroundColor: theme.success
    },

    '&[data-status=away]': {
      backgroundColor: theme.warning
    },

    '&[data-status=busy]': {
      backgroundColor: theme.error
    },

    '&[data-status=offline]': {
      backgroundColor: shadeBlend( 0.5, theme.background, theme.foreground )
    }
  },

  statusText: {
    color: shadeBlend( 0.12, theme.foreground, theme.background )
  }
} : null );

export default styles;