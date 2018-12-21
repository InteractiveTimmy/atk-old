import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( {
  WidgetContainer: {
    margin: '0.5em 0.5em 0 0.5em',
    backgroundColor: theme.colors.bg,
    color: theme.colors.fg,
    borderRadius: '1px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: shadeBlend( 0.12, theme.colors.bg, theme.colors.cc ),
    flexShrink: 0,

    '&:last-child': {
      marginBottom: '0.5em'
    }
  }
} );

export default styles;