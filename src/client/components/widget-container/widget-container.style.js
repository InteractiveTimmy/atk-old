import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( {
  WidgetContainer: {
    margin: '0.5em 0.5em 0 0.5em',
    backgroundColor: theme.widgets.bg,
    color: theme.widgets.fg,
    borderRadius: '1px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: shadeBlend( 0.12, theme.widgets.bg, theme.widgets.tc ),
    flexShrink: 0,

    '&:last-child': {
      marginBottom: '0.5em'
    }
  }
} );

export default styles;