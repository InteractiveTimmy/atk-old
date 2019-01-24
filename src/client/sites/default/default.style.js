import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( ( Object.keys( theme ).length !== 0 ) ?
  ( {
    navigation: {
      backgroundColor: theme.primary,
      color: theme.target,
      fill: theme.target,
      width: '4em',
      display: 'flex',
      flexDirection: 'column'
    },

    widget: {
      backgroundColor: theme.accent,
      color: theme.target,
      width: '16em',
      display: 'flex',
      flexDirection: 'column'
    },

    applet: {
      backgroundColor: theme.background,
      color: theme.foreground,
      flexGrow: 1
    },

    navUpper: {
      width: '4em',
      flexGrow: '1'
    }
  } ) : null
);

export default styles;