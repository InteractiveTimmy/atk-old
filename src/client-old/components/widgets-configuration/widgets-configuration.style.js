import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( {
  WidgetsConfiguration: {
    transition: 'background-color 0.2s, color 0.2s',
    flexGrow: 1,
    flexBasis: 0,
    cursor: 'pointer',
    backgroundColor: shadeBlend( 0.18, theme.widgets.bg, theme.widgets.tc ),
    color: theme.widgets.fg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    '&:hover': {
      backgroundColor: shadeBlend( 0.24, theme.widgets.bg, theme.widgets.tc ),
    }
  },

  Icon: {
    height: '1.5em',
    width: '1.5em',
    fill: theme.widgets.fg
  },

  Text: {
    fontSize: '0.6em'
  }
} );

export default styles;