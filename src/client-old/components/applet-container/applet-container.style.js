import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( {
  AppletContainer: {
    flexGrow: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
    backgroundColor: shadeBlend( 0.12, theme.applet.bg, theme.applet.tc ),
    color: theme.applet.fg
  }
} );

export default styles;