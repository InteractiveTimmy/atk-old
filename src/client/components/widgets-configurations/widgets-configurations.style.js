import { shadeBlend } from '../../utils/index.js';

const styles = theme => ( {
  WidgetsConfigurations: {
    height: '3em',
    backgroundColor: shadeBlend( 0.18, theme.widgets.bg, theme.widgets.tc ),
    color: theme.widgets.fg,
    flexShrink: 0,
    display: 'flex'
  }
} );

export default styles;