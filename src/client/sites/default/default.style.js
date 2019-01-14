import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( ( Object.keys( theme ).length !== 0 ) ?
  ( {
  navigation: {
    backgroundColor: theme.accent,
    color: theme.foreground,
    width: '16em',
    display: 'flex',
    flexDirection: 'column'
  },

  view: {
    backgroundColor: theme.background,
    color: theme.foreground,
    flexGrow: '1',
    display: 'flex',
    flexDirection: 'column'
  },

  header: {
    backgroundColor: shadeBlend( 0.06, theme.background, theme.target ),
    height: '4em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  content: {
    flexGrow: '1',
    display: 'flex'
  },

  applet: {
    flexGrow: '1'
  },

  widget: {
    width: '24em'
  }
} ) : null );

export default styles;