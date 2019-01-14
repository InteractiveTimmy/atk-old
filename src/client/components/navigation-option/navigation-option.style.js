import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( ( Object.keys( theme ).length !== 0 ) ? {
  navigationOption: {
    transition: 'background-color 0.2s, height 0.2s',
    cursor: 'pointer',

    '&[data-selected=true]': {
      backgroundColor: shadeBlend( 0.06, theme.accent, theme.target )
    }
  },

  workspaceOption: {
    transition: 'background-color 0.2s, height 0.2s',
    minHeight: '2em',
    height: '2em',
    display: 'flex',
    alignItems: 'center',

    '&:hover': {
      backgroundColor: shadeBlend( 0.06, theme.accent, theme.target )
    },

    '&[data-selected=true]': {
      backgroundColor: shadeBlend( 0.06, theme.accent, theme.target ),

      '&:hover': {
        backgroundColor: shadeBlend( 0.12, theme.accent, theme.target )
      }
    }
  },

  appletOption: {
    transition: 'background-color 0.2s, height 0.2s',
    minHeight: '2em',
    height: '2em',
    display: 'flex',
    alignItems: 'center',

    '&:hover': {
      backgroundColor: shadeBlend( 0.12, theme.accent, theme.target )
    },

    '&[data-selected=true]': {
      backgroundColor: 'blue'
    }
  },

  icon: {
    width: '1.6em',
    height: '1.6em',
    padding: '0.2em 1.2em'
  },

  title: {
    flexGrow: 1
  },

  notification: {
    transition: 'background-color 0.2s',
    width: '1.2em',
    height: '1.2em',
    margin: '0.4em',
    borderRadius: '0.2em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&[data-status=success]': {
      backgroundColor: theme.success
    },

    '&[data-status=info]': {
      backgroundColor: theme.info
    },

    '&[data-status=warning]': {
      backgroundColor: theme.warning
    },

    '&[data-status=error]': {
      backgroundColor: theme.error
    },
  },

  notificationText: {
    fontSize: '0.8em'
  }
} : null );

export default styles;