import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( {
  WidgetGroup: {
    transition: 'background-color 0.2s, color 0.2s',
    width: '3em',
    cursor: 'pointer',
    flexShrink: 0,
    backgroundColor: theme.header.bg,
    color: theme.header.fg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fill: theme.header.fg,

    '&:hover': {
      backgroundColor: shadeBlend( 0.06, theme.widgets.bg, theme.widgets.tc ),
      color: theme.widgets.fg,
      fill: theme.widgets.fg
    }
  },

  Icon: {
    height: '1.5em',
    width: '1.5em',
  }
} );

export default styles;