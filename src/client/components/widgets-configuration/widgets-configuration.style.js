import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( {
  WidgetsConfiguration: {
    transition: '0.2s all',
    flexGrow: 1,
    flexBasis: 0,
    cursor: 'pointer',
    backgroundColor: shadeBlend( 0.18, theme.colors.bg, theme.colors.cc ),
    color: theme.colors.fg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    '&:hover': {
      backgroundColor: shadeBlend( 0.24, theme.colors.bg, theme.colors.cc ),
    }
  },

  Icon: {
    height: '1.5em',
    width: '1.5em',
    fill: theme.colors.fg
  },

  Text: {
    fontSize: '0.6em'
  }
} );

export default styles;